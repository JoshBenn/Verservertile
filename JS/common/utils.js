export const StatusCode = {
    Continue: 100,
    SwitchProto: 101,
    Processing: 102,
    Early: 103,

    Ok: 200,
    Created: 201,
    Accepted: 202,
    NoContent: 204,

    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,

    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    PreconditionFailed: 412,
    UnsupportedMediaType: 415,

    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
};

export const Status = {
    Success: "success",
    Unauthorized: "unauthorized",
    Error: "error",
}

export const Method = {
    Delete: "DELETE",
    Get: "GET",
    Head: "HEAD",
    Post: "POST",
    Put: "PUT",
    Trace: "TRACE",
};

export const Parameter = {
    Data: "data",
    End: "end",
    Error: "error",
    Uuid: "uuid",
    Host: "host",
    Status: "status",
    Message: "message",
    Port: "port",
}

export const Header = {
    Accept: "Accept",
    ApplicationJson: "application/json",
    ContentType: "Content-Type",
    TextPlain: "text/plain",
};

export const Mode = {
    None: 0,
    Client: 1,
    ServerNode: 2,
    LeaderNode: 3,
};

export const Path = {
    Registration: "/node/registration",
}
