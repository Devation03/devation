defmodule DevationWeb.Api.UserController do
  use DevationWeb, :controller

  alias Devation.Users
  alias Devation.Schema.User
  alias Devation.Guardian

  def index(conn, _params) do
    user = Guardian.Plug.current_resource(conn)

    json(conn, %{user: user})
  end

  def sign_up(conn, params) do
    with {:ok, %User{} = user} <- Users.create_user(params),
         {:ok, token, _claims} <- Guardian.encode_and_sign(user, %{}, ttl: {7, :days}) do
      json(conn, %{token: token})
    else
      {:error, changeset} ->
        error = Enum.at(changeset.errors, 0)

        case error do
          {:password_virtual, _} ->
            conn
            |> put_status(:bad_request)
            |> json(%{message: "Opps! Your password should be atleast 8 characters."})

          {:email, _} ->
            conn
            |> put_status(:conflict)
            |> json(%{message: "Opps! Email already in use. Please login or use another email."})

          _ ->
            conn |> put_status(:bad_request) |> json(%{message: "Invalid parameters."})
        end
    end
  end

  def sign_in(conn, %{"email" => email, "password" => password}) do
    case Users.sign_in_and_get_token(email, password) do
      {:ok, token, _claims} ->
        json(conn, %{token: token})

      _ ->
        conn
        |> put_status(:unauthorized)
        |> json(%{message: "Invalid email or password"})
    end
  end
end
