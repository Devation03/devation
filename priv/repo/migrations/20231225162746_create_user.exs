defmodule Devation.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :name, :string
      add :email, :string
      add :password, :string
      add :reset_token, :text

      timestamps(type: :utc_datetime)
    end

    create unique_index(:users, [:email])
  end
end
