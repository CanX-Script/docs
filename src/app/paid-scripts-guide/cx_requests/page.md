# cx_requests

![CanX Requests](/cx_requests.png)

## Requirements 🌂

-   Server artifacts version > **5181**
-   basic understanding of **fivem development** and **lua**

## Config Example 🎣

```lua
Config = {
    theme = "neon", -- mono, neon, cx
    accent_color = "#1cff59",
    locale = {
        cancel = "Cancel",
        accept = "Accept",
        decline = "Decline",
        save = "Save",
        blockreq = "BLOCK REQUESTS",
        off = "OFF",
        on = "ON"
    }
}
```

## Installation 🎛

1. Extract the script in your resources
2. Start the script in `server.cfg`
3. Use the export code snippet in your scripts

## Usage

**Client Side**

```lua
exports['cx_requests']:requestMenu(target, time, title, text, event, client_or_server, paramters, paramters_nums)
```

**Server Side**

```lua
TriggerClientEvent('cx_requests:RequestMenu', source, target, time, title, message, trigger, side, parameters, parametersNum)
```

**Carry Script Example**

```lua
exports['cx_requests']:requestMenu(GetPlayerServerId(PlayerId()), 10000, 'Carry Request', ''..Name..' Wants to carry you', 'carry:acccc', 'client', {requestID}, 1)
```

**Fields**:

-   The **target** field defines who receives the request;
-   The **time** field lets you set the time the request window will stay on the screen;
-   The **title** field is where you set the request title;
-   The **message** field lets you choose the message that will appear on the request window;
-   The **trigger** field is where you choose the event that will be executed;
-   The **side (client/server)** field allows you to choose if the trigger is client or server sided;
-   The **parameters** field contains the parameters the trigger takes;
-   The **parametersNum** field are the number of paramenters used.
