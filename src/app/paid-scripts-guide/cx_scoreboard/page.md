# cx_scoreboard

## **CANX SCOREBOARD**

### 💫 Config Example

```
-- <<<     CanX Spawn Selector     >>> --|
--    Discord : discord.gg/MGEVjBbKHw  --|
--        Tebex : canx.tebex.io        --|
-- <<<     CanX Spawn Selector     >>> --|


Config = {}

Config.Framework = 'ESX' -- QB / ESX / Standalone

Config.ServerName = 'CANX ROLEPLAY' -- server name
Config.OpenKey = 'F10' -- openkey For opening Ui
Config.RefreshTime = 10000 -- refresh time, for player stats, player list, robbery list

Config.UnemployedJobName = 'unemployed' -- unemployed job name
Config.TaxiJobName = 'taxi' -- taxi job name
Config.PoliceJobName = 'police' -- police job name
Config.AmbulanceJobName = 'ambulance' -- ambulance job name
Config.MechanicJobName = 'mechanic' -- mechanic job name

Config.DefaultAvatar = 'yourimage.png' -- this is for when the player got any error from internet or steam profile

Config.ShowPed = {
    Enable = true, -- being enable for showing the ped
    Scenario = 'WORLD_HUMAN_HUMAN_STATUE' -- scenario for ped in scoreboard
}

Config.AdminGroups = { -- add your admin groups
    'admin',
    'superadmin'
}

Config.Robbery = { -- robbery list
    {
        Name = 'JAVAHERY', -- robbery name
        Label = 'JAVAHERY ROBBERY', -- robbery label for showing the robbery name in scoreboard
        Stats = 'Active', -- stats robbery when the server started
        Image = 'eventimage' -- image name robbery
    },
    {
        Name = 'bank', -- robbery name
        Label = 'BANK ROBBERY', -- robbery label for showing the robbery name in scoreboard
        Stats = 'Active', -- stats robbery when the server started
        Image = 'eventimage' -- image name robbery
    },
    {
        Name = 'store', -- robbery name
        Label = 'STORE ROBBERY', -- robbery label for showing the robbery name in scoreboard
        Stats = 'Active', -- stats robbery when the server started
        Image = 'eventimage' -- image name robbery
    },
    {
        Name = 'boat', -- robbery name
        Label = 'BOAT ROBBERY', -- robbery label for showing the robbery name in scoreboard
        Stats = 'Active', -- stats robbery when the server started
        Image = 'eventimage' -- image name robbery
    }
}

```

## Scoreboard Event

Put this trigger where your stats robbery is changing

```
-- TriggerClientEvent('CanX_Scoreboard:SetRobbryStats', -1, robberyname, stats)
-- robberyname: your robbery name in the config
-- stats: for set stats of your robbery  (Active, Cooldown, Not Active)
```

```
-- TriggerServerEvent('CanX_Scoreboard:RefreshPlayerList') ==> evrywhere you call this event then will refresh your player list
-- TriggerServerEvent('CanX_Scoreboard:RefreshPlayerInfo') ==> evrywhere you call this event then will refresh your player info
-- TriggerServerEvent('CanX_Scoreboard:RefreshJobCounter') ==> evrywhere you call this event then will refresh your number of job list
```
