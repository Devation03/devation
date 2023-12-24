defmodule Devation.Repo do
  use Ecto.Repo,
    otp_app: :devation,
    adapter: Ecto.Adapters.Postgres
end
