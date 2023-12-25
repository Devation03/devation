defmodule Devation.Schema.User do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  @derive {Jason.Encoder, only: [:id, :name, :email]}

  schema "users" do
    field(:name, :string)
    field(:email, :string)

    timestamps(type: :utc_datetime)
  end

  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email])
    |> validate_required([:name, :email])
  end
end
