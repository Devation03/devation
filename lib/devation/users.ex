defmodule Devation.Users do
  import Ecto.Query, warn: false

  alias Devation.Repo
  alias Devation.Schema.User

  def get_user!(id), do: Repo.get!(User, id)

  def get_user_by_email!(email), do: Repo.get!(User, email: email)

  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  def update_user(%User{} = user, attrs) do
    user
    |> Ecto.Changeset.change(attrs)
    |> Repo.update()
  end

  def delete_user(%User{} = user) do
    Repo.delete(user)
  end
end
