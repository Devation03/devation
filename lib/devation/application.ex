defmodule Devation.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      DevationWeb.Telemetry,
      # Start the Ecto repository
      Devation.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Devation.PubSub},
      # Start Finch
      {Finch, name: Devation.Finch},
      # Start the Endpoint (http/https)
      DevationWeb.Endpoint
      # Start a worker by calling: Devation.Worker.start_link(arg)
      # {Devation.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Devation.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    DevationWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
