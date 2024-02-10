defmodule Devation.Guardian do
  use Guardian, otp_app: :devation

  # @impl true
  # def build_claims(claims, user, _opts) do
  #   {:ok, Map.put(claims, "version", user.access_token_version)}
  # end

  @impl true
  def subject_for_token(user, _claims) do
    sub = to_string(user.id)
    {:ok, sub}
  end

  @impl true
  def resource_from_claims(claims) do
    id = claims["sub"]

    case Devation.Users.get_user!(id) do
      nil ->
        {:error, :not_found}

      user ->
        {:ok, user}
    end
  end
end
