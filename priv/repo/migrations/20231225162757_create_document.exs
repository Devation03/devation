defmodule Devation.Repo.Migrations.CreateDocument do
  use Ecto.Migration

  def change do
    create table(:documents, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:title, :string)
      add(:body, :text)
      add(:user_id, references(:users, on_delete: :nothing, type: :binary_id))

      timestamps(type: :utc_datetime)
    end
  end
end
