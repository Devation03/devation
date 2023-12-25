defmodule Devation.Documents do
  import Ecto.Query, warn: false

  alias Devation.Repo
  alias Devation.Schema.Document

  def get_document!(id), do: Repo.get!(Document, id)

  def create_document(attrs \\ %{}) do
    %Document{}
    |> Document.changeset(attrs)
    |> Repo.insert()
  end

  def update_document(%Document{} = document, attrs) do
    document
    |> Ecto.Changeset.change(attrs)
    |> Repo.update()
  end

  def delete_document(%Document{} = document) do
    Repo.delete(document)
  end

  def list_document_of_user(user_id) do
    from(document in Document,
      where: document.user_id == ^user_id,
      order_by: [desc: document.inserted_at]
    )
    |> Repo.all()
  end
end
