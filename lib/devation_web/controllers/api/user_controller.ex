defmodule DevationWeb.Api.UserController do
  use DevationWeb, :controller

  alias Devation.Users

  def index(conn, params) do
    users = Users.get_user_by_email!(params["email"])

    conn
    |> put_status(:ok)
    |> json(%{data: users})
  end

  def create(conn, params) do
    case Users.create_user(%{name: params["name"], email: params["email"]}) do
      {:ok, user} ->
        conn
        |> put_status(:created)
        |> json(%{data: user})

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(%{errors: changeset.errors})
    end
  end
end
