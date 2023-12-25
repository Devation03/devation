defmodule Devation.Schema.Document do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  @derive {Jason.Encoder, only: [:id, :title, :body]}

  schema "documents" do
    field(:title, :string)
    field(:body, :string)

    belongs_to(:user, Devation.Schema.User)

    timestamps(type: :utc_datetime)
  end

  def changeset(document, attrs) do
    document
    |> cast(attrs, [:title, :body])
    |> validate_required([:title, :body])
  end
end
