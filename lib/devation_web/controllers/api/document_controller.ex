defmodule DevationWeb.Api.DocumentController do
  use DevationWeb, :controller

  alias Devation.Documents

  def index(conn, params) do
    document = Documents.get_document!(params["document_id"])

    conn
    |> put_status(:ok)
    |> json(%{data: document})
  end

  def create(conn, params) do
    case Documents.create_document(%{title: params["title"], body: params["body"]}) do
      {:ok, document} ->
        conn
        |> put_status(:created)
        |> json(%{data: document})

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(%{errors: changeset.errors})
    end
  end
end
