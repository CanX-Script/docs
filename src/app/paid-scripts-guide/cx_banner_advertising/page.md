# cx_banner_advertising

![Canx Banner Advertising](/cx_banner_advertising.png)

## Setup Guide

### 1. Database Migration

To set up the database, follow these steps:

-   Use HeidiSQL (recommended) or any MySQL database manager.
-   Open the provided SQL file.
-   Run the SQL script on your database.

### 2. Configuration Setup

The configuration file allows you to customize various aspects of the script. Below is the default configuration and how you can modify it to suit your needs.

```lua
Config = {}

Config.PanelCommand = 'openpanel'

Config.LocateOption = 'teleport' -- Options: 'teleport', 'mark', 'camera'

Config.Language = "EN"

Config.UI = {
    colors = {
        dgray = "rgb(11, 17, 31)",
        ["button-blue-gradient-from"] = "rgb(68, 187, 254)",
        ["button-blue-gradient-to"] = "rgb(30, 120, 254)",
        ["button-green-gradient-from"] = "rgb(144, 223, 117)",
        ["button-green-gradient-to"] = "rgb(98, 182, 85)",
        ["preview-button-green"] = "rgb(67, 214, 117)",
    },
    translation = Locale.uiLocale[Config.Language]
}
```

### 3. Permissions Setup

The script supports various frameworks for permission management:

-   `esx`
-   `qbcore`
-   `vrp`
-   `ace`
-   `custom`
-   `SteamHEX`
-   `no-restriction` (default)

To configure framework permissions, modify the following:

```lua
Config.Framework = 'no-restriction'
Config.Framework_perms = {
    ['admin'] = true,
    ['headadmin'] = true,
    ['owner'] = true,
    ['headhelper'] = false,
    ['helper'] = false,
    ['user'] = false,
}
```

For SteamHEX-based permission checking, add Steam HEX IDs to the list:

```lua
Config.AdminList = {
    'steam:110000141876e85', -- Example Admin
}
```

### 4. Discord Webhook Configuration

To integrate Discord notifications, update the webhook details:

```lua
Config.BotName = 'CanX'    -- Bot name
Config.ServerName = 'CanX' -- Server name
Config.IconURL = "https://cdn.discordapp.com/attachments/..."
Config.DefaultWebhook = '' -- Your Discord Webhook URL
```

### 5. Notification System

This script supports the `cx_notify` system. If you are using a different notification system, modify the function accordingly:

```lua
Config.Notify = function(title, message, types, svside, id)
    if svside then
        TriggerClientEvent('cx_advertiser:notify', id, { title = title, message = message, type = types })
    else
        TriggerEvent('cx_advertiser:Notify', { title = title, message = message, type = types })
    end
end
```

## Final Notes

-   Ensure that `Config.Framework` matches your server's framework.
-   Use `SteamHEX` for admin permissions if required.
-   Set the correct Discord webhook URL for notifications.

This documentation provides the necessary steps to configure the script correctly. If you encounter any issues, refer to the script's support channels.
