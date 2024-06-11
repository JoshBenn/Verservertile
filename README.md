# Verservertile

The entire goal behind this project is to provide a standardized testing frontend and backend development center.

## API Calls

- All will be with "application/json"

### Node Communication:

- "/node/registration"
  - Node registration:POST | deregistration:DELETE

#### Example:

```json
// Registration
{
    // Information for the leader
    "hostname": "localhost",
    "port": 8000,
    "path": "/node/registration",
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
    },
    "data": {
        "uuid": "globallyuniqueid", // Globally unique id
        "host": "localhost",
        "port": 8001,
    }
}

// Deregistration
{
    "hostname": "localhost",
    "port": 8000,
    "path": "/node/registration/globallyuniqueid",
    "method": "DELETE",
    "headers": {
        "Content-Type": "application/json",
    },
}
```

### Authentication:

- "/auth/access"
  - User log- edit:POST | out:DELETE | registration:POST

#### Example

```json
{
  // Information for the leader
  "hostname": "localhost",
  "port": 8000,
  "path": "/auth/access",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "data": {
    "action": "sign_in", // "sign_in" | "register"
    "username": "uniqueusername", // Globally unique id
    "password": "password"
  }
}
{
  // Information for the leader
  "hostname": "localhost",
  "port": 8000,
  "path": "/auth/access/sessionid",
  "method": "DELETE",
  "headers": {
    "Content-Type": "application/json"
  }
}
```

### DB Management -- UNDER CONSTRUCTION

- Catagories: "/database/category"
  - Database add:PUT | remove:DELETE | edit:POST | query:GET category
- Items: "/database/item"
  - Database add:PUT | remove:DELETE | edit:POST | query:GET item

#### Example

```json
{
  // Information for the leader
  "hostname": "localhost",
  "port": 8000,
  "path": "/auth/access",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "data": {
    // Fill in information here
  }
}
```
