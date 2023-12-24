defmodule DevationWeb.CollabRoomChannel do
  use Phoenix.Channel

  def join("collab_room:lobby", _message, socket) do
    IO.inspect(socket)
    {:ok, socket}
  end

  def handle_in("edit", %{"body" => body}, socket) do
    broadcast!(socket, "new_edit", %{body: body})
    {:noreply, socket}
  end
end
