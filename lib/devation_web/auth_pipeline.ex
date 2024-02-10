defmodule DevationWeb.AuthPipeline do
  use Guardian.Plug.Pipeline,
    otp_app: :produze,
    module: Devation.Guardian,
    error_handler: DevationWeb.AuthErrorHandler

  plug Guardian.Plug.VerifyHeader, claims: %{typ: "access"}
  plug Guardian.Plug.EnsureAuthenticated
  plug Guardian.Plug.LoadResource
end
