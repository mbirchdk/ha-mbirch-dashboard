// this is an auto generated file, do not change this manually

import { ServiceFunction, ServiceFunctionTypes, VacuumEntityState } from '@hakit/core';
declare module '@hakit/core' {
  export interface CustomSupportedServices<T extends ServiceFunctionTypes = 'target'> {
    persistentNotification: {
      // Shows a notification on the **Notifications** panel.
      create: ServiceFunction<
        T,
        {
          // Message body of the notification. @example Please check your configuration.yaml.
          message: string;
          // Optional title of the notification. @example Test notification
          title?: string;
          // ID of the notification. This new notification will overwrite an existing notification with the same ID. @example 1234
          notification_id?: string;
        }
      >;
      // Removes a notification from the **Notifications** panel.
      dismiss: ServiceFunction<
        T,
        {
          // ID of the notification to be removed. @example 1234
          notification_id: string;
        }
      >;
      // Removes all notifications from the **Notifications** panel.
      dismissAll: ServiceFunction<T, object>;
    };
    homeassistant: {
      // Saves the persistent states immediately. Maintains the normal periodic saving interval.
      savePersistentStates: ServiceFunction<T, object>;
      // Generic service to turn devices off under any domain.
      turnOff: ServiceFunction<T, object>;
      // Generic service to turn devices on under any domain.
      turnOn: ServiceFunction<T, object>;
      // Generic service to toggle devices on/off under any domain.
      toggle: ServiceFunction<T, object>;
      // Stops Home Assistant.
      stop: ServiceFunction<T, object>;
      // Checks the Home Assistant YAML-configuration files for errors. Errors will be shown in the Home Assistant logs.
      checkConfig: ServiceFunction<T, object>;
      // Forces one or more entities to update its data.
      updateEntity: ServiceFunction<T, object>;
      // Reloads the core configuration from the YAML-configuration.
      reloadCoreConfig: ServiceFunction<T, object>;
      // Updates the Home Assistant location.
      setLocation: ServiceFunction<
        T,
        {
          // Latitude of your location. @example 32.87336
          latitude: number;
          // Longitude of your location. @example 117.22743
          longitude: number;
          // Elevation of your location. @example 120
          elevation?: number;
        }
      >;
      // Reloads Jinja2 templates found in the `custom_templates` folder in your config. New values will be applied on the next render of the template.
      reloadCustomTemplates: ServiceFunction<T, object>;
      // Reloads the specified config entry.
      reloadConfigEntry: ServiceFunction<
        T,
        {
          // The configuration entry ID of the entry to be reloaded. @example 8955375327824e14ba89e4b29cc3ec9a
          entry_id?: string;
        }
      >;
      // Reload all YAML configuration that can be reloaded without restarting Home Assistant.
      reloadAll: ServiceFunction<T, object>;
      // Sets aliases for a floor. Overwrite and removed any existing aliases, fully replacing them with the new ones.
      setFloorAliases: ServiceFunction<
        T,
        {
          // The ID of the floor to set the aliases for.
          floor_id: object;
          // The aliases to set for the floor.
          aliases: object;
        }
      >;
      // Removes a device from an area. As a device can only be in one area, this call doesn't need to specify the area.
      removeDeviceFromArea: ServiceFunction<
        T,
        {
          // The ID of the device to remove the area from.
          device_id: object;
        }
      >;
      // Enables a device on the fly.
      enableDevice: ServiceFunction<
        T,
        {
          // The device to disable.
          device_id: object;
        }
      >;
      // Removes a label from an entity. If multiple labels or multiple entities are provided, all combinations will be removed.
      removeLabelFromEntity: ServiceFunction<
        T,
        {
          // The ID(s) of the label(s) to remove from the entity/entities.
          label_id: object;
          // The ID(s) of the entity/entities to remove the label(s) from.
          entity_id: string;
        }
      >;
      // Deletes a new area on the fly.
      deleteArea: ServiceFunction<
        T,
        {
          // The ID of the area to delete.
          area_id: object;
        }
      >;
      // Removes an entity from an area. As an entity can only be in one area, this call doesn't need to specify the area. Please note, the entity will still be in the area of the device that provides it after this call.
      removeEntityFromArea: ServiceFunction<
        T,
        {
          // The ID of the entity (or entities) to remove the area from.
          entity_id: string;
        }
      >;
      // Hides an entity (or entities) on the fly.
      hideEntity: ServiceFunction<
        T,
        {
          // The entity/entities to hide.
          entity_id: string;
        }
      >;
      // Deletes all orphaned entities that no longer have an integration that claim/provide them. Please note, if the integration was just removed, it might need a restart for Home Assistant to realize they are orphaned. **WARNING** Entities might have been marked orphaned because an integration is offline or not working since Home Assistant started. Calling this service will delete those entities as well.
      deleteAllOrphanedEntities: ServiceFunction<T, object>;
      // Adds an area to a floor. Please note, if the area is already on a floor, it will be removed from the previous floor.
      addAreaToFloor: ServiceFunction<
        T,
        {
          // The ID of the floor to add the area on.
          floor_id: object;
          // The ID of the area(s) to add to the floor.
          area_id: object;
        }
      >;
      // Adds an alias to a floor.
      addAliasToFloor: ServiceFunction<
        T,
        {
          // The ID of the floor to add the alias to.
          floor_id: object;
          // The alias (or list of aliasses) to add to the floor.
          alias: object;
        }
      >;
      // Creates a new area on the fly.
      createArea: ServiceFunction<
        T,
        {
          // The name of the area to create.
          name: string;
          // Icon to use for the area.
          icon?: object;
          // A list of aliases for the area. This is useful if you want to use the area in a different language or different nickname.
          aliases?: object;
        }
      >;
      // Creates a new floor on the fly.
      createFloor: ServiceFunction<
        T,
        {
          // The name of the floor to create.
          name: string;
          // Icon to use for the floor.
          icon?: object;
          // The level the floor is on in your home.
          level?: number;
          // A list of aliases for the floor. This is useful if you want to use the floor in a different language or different nickname.
          aliases?: object;
        }
      >;
      // Disables polling for updates for an integration configuration entry.
      disablePolling: ServiceFunction<
        T,
        {
          // The integration configuration entry to disable polling for.
          config_entry_id: object;
        }
      >;
      // Ignore all currently discovered devices that are shown on the integrations dashboard. This will not ignore devices that are discovered after this.
      ignoreAllDiscovered: ServiceFunction<
        T,
        {
          // The integration domain to ignore all discovered devices for. If not provided, all domains will be considered to be ignored.
          domain?: string;
        }
      >;
      // Disables an entity (or entities) on the fly.
      disableEntity: ServiceFunction<
        T,
        {
          // The entity/entities to disable.
          entity_id: string;
        }
      >;
      // Updates an entity's ID on the fly.
      updateEntityId: ServiceFunction<
        T,
        {
          // The entity/entities to update.
          entity_id: string;
          // The new ID for the entity
          new_entity_id: string;
        }
      >;
      // Removes a label to an area. If multiple labels or multiple areas are provided, all combinations will be removed.
      removeLabelFromArea: ServiceFunction<
        T,
        {
          // The ID(s) of the label(s) to remove from the area(s).
          label_id: object;
          // The ID(s) of the area(s) to remove the label(s) from.
          area_id: object;
        }
      >;
      // Enables polling for updates for an integration configuration entry.
      enablePolling: ServiceFunction<
        T,
        {
          // The integration configuration entry to enable polling for.
          config_entry_id: object;
        }
      >;
      // Deletes a label on the fly.
      deleteLabel: ServiceFunction<
        T,
        {
          // The ID of the label to delete.
          label_id: object;
        }
      >;
      // Removes an alias from a floor.
      removeAliasFromFloor: ServiceFunction<
        T,
        {
          // The ID of the floor to remove the alias from.
          floor_id: object;
          // The alias (or list of aliasses) to remove from the floor.
          alias: object;
        }
      >;
      // Enables an integration configuration entry.
      enableConfigEntry: ServiceFunction<
        T,
        {
          // The integration configuration entry to enable.
          config_entry_id: object;
        }
      >;
      // Adds a label to an area. If multiple labels or multiple areas are provided, all combinations will be added.
      addLabelToArea: ServiceFunction<
        T,
        {
          // The ID(s) of the label(s) to add the area(s).
          label_id: object;
          // The ID(s) of the area(s) to add the label(s) to.
          area_id: object;
        }
      >;
      // Creates a new label on the fly.
      createLabel: ServiceFunction<
        T,
        {
          // The name of the label to create.
          name: string;
          // Description for the label.
          description: string;
          // Icon to use for the label.
          icon?: object;
          // Color to use for the label. Can be a color name from the list, or a hex color code (like #FF0000).
          color?:
            | 'primary'
            | 'accent'
            | 'disabled'
            | 'red'
            | 'pink'
            | 'purple'
            | 'deep_purple'
            | 'indigo'
            | 'blue'
            | 'light_blue'
            | 'cyan'
            | 'teal'
            | 'green'
            | 'light_green'
            | 'lime'
            | 'yellow'
            | 'orange'
            | 'deep_orange'
            | 'brown'
            | 'grey'
            | 'blue_grey'
            | 'black'
            | 'white';
        }
      >;
      // Adds an device to an area. Please note, if the device is already in an area, it will be removed from the previous area.
      addDeviceToArea: ServiceFunction<
        T,
        {
          // The ID of the area to add the device to.
          area_id: object;
          // The ID of the device(s) to add to the area.
          device_id: object;
        }
      >;
      // Unhides an entity (or entities) on the fly.
      unhideEntity: ServiceFunction<
        T,
        {
          // The entity/entities to unhide.
          entity_id: string;
        }
      >;
      // Removes a label from a device. If multiple labels or multiple devices are provided, all combinations will be removed.
      removeLabelFromDevice: ServiceFunction<
        T,
        {
          // The ID(s) of the label(s) to remove from the device(s).
          label_id: object;
          // The ID(s) of the device(s) to remove the label(s) from.
          device_id: object;
        }
      >;
      // Removes an area from a floor. As an area can only be on one floor, this call doesn't need to specify the floor.
      removeAreaFromFloor: ServiceFunction<
        T,
        {
          // The ID of the area to remove the floor from.
          area_id: object;
        }
      >;
      // Restart the Home Assistant service.
      restart: ServiceFunction<
        T,
        {
          // If the restart should be done in safe mode. This will disable all custom integrations and frontend modules.
          safe_mode?: boolean;
          // Force the restart. WARNING! This will not gracefully shutdown Home Assistant, it will skip configuration checks and ignore running database migrations. Only use this if you know what you are doing.
          force?: boolean;
        }
      >;
      // Enables an entity (or entities) on the fly.
      enableEntity: ServiceFunction<
        T,
        {
          // The entity/entities to enable.
          entity_id: string;
        }
      >;
      // Adds an entity to an area. Please note, if the enity is already in an area, it will be removed from the previous area. This will override the area the device, that provides this entity, is in.
      addEntityToArea: ServiceFunction<
        T,
        {
          // The ID of the area to add the entity to.
          area_id: object;
          // The ID of the entity (or entities) to add to the area.
          entity_id: string;
        }
      >;
      // Disables an integration configuration entry.
      disableConfigEntry: ServiceFunction<
        T,
        {
          // The integration configuration entry to disable.
          config_entry_id: object;
        }
      >;
      // Disables a device on the fly.
      disableDevice: ServiceFunction<
        T,
        {
          // The device to disable.
          device_id: object;
        }
      >;
      // Deletes a floor on the fly.
      deleteFloor: ServiceFunction<
        T,
        {
          // The ID of the floor to delete.
          floor_id: object;
        }
      >;
      // Adds a label to a device. If multiple labels or multiple devices are provided, all combinations will be added.
      addLabelToDevice: ServiceFunction<
        T,
        {
          // The ID(s) of the label(s) to add the device(s).
          label_id: object;
          // The ID(s) of the device(s) to add the label(s) to.
          device_id: object;
        }
      >;
      // Adds an alias to an area.
      addAliasToArea: ServiceFunction<
        T,
        {
          // The ID of the area to add the alias to.
          area_id: object;
          // The alias (or list of aliasses) to add to the area.
          alias: object;
        }
      >;
      // Sets aliases for an area. Overwrite and removed any existing aliases, fully replacing them with the new ones.
      setAreaAliases: ServiceFunction<
        T,
        {
          // The ID of the area to set the aliases for.
          area_id: object;
          // The aliases to set for the area.
          aliases: object;
        }
      >;
      // Removes an alias from an area.
      removeAliasFromArea: ServiceFunction<
        T,
        {
          // The ID of the area to remove the alias from.
          area_id: object;
          // The alias (or list of aliasses) to remove from the area.
          alias: object;
        }
      >;
      // Adds a label to an entity. If multiple labels or multiple entities are provided, all combinations will be added.
      addLabelToEntity: ServiceFunction<
        T,
        {
          // The ID(s) of the label(s) to add the entity/entities.
          label_id: object;
          // The ID(s) of the entity/entities to add the label(s) to.
          entity_id: string;
        }
      >;
    };
    systemLog: {
      // Clears all log entries.
      clear: ServiceFunction<T, object>;
      // Write log entry.
      write: ServiceFunction<
        T,
        {
          // Message to log. @example Something went wrong
          message: string;
          // Log level.
          level?: 'debug' | 'info' | 'warning' | 'error' | 'critical';
          // Logger name under which to log the message. Defaults to `system_log.external`. @example mycomponent.myplatform
          logger?: string;
        }
      >;
    };
    logger: {
      // Sets the default log level for integrations.
      setDefaultLevel: ServiceFunction<
        T,
        {
          // Default severity level for all integrations.
          level?: 'debug' | 'info' | 'warning' | 'error' | 'fatal' | 'critical';
        }
      >;
      // Sets the log level for one or more integrations.
      setLevel: ServiceFunction<T, object>;
    };
    recorder: {
      // Starts purge task - to clean up old data from your database.
      purge: ServiceFunction<
        T,
        {
          // Number of days to keep the data in the database. Starting today, counting backward. A value of `7` means that everything older than a week will be purged.
          keep_days?: number;
          // Attempt to save disk space by rewriting the entire database file.
          repack?: boolean;
          // Apply `entity_id` and `event_type` filters in addition to time-based purge.
          apply_filter?: boolean;
        }
      >;
      // Starts a purge task to remove the data related to specific entities from your database.
      purgeEntities: ServiceFunction<
        T,
        {
          // List of entities for which the data is to be removed from the recorder database.
          entity_id?: string;
          // List of domains for which the data needs to be removed from the recorder database. @example sun
          domains?: object;
          // List of glob patterns used to select the entities for which the data is to be removed from the recorder database. @example domain*.object_id*
          entity_globs?: object;
          // Number of days to keep the data for rows matching the filter. Starting today, counting backward. A value of `7` means that everything older than a week will be purged. The default of 0 days will remove all matching rows immediately.
          keep_days?: number;
        }
      >;
      // Starts the recording of events and state changes.
      enable: ServiceFunction<T, object>;
      // Stops the recording of events and state changes.
      disable: ServiceFunction<T, object>;
      // Import long-term statistics.
      importStatistics: ServiceFunction<
        T,
        {
          // The statistics ID (entity ID) to import for.
          statistic_id: string;
          // The name of the statistics.
          name?: string;
          // The source of the statistics data.
          source: string;
          // The unit of measurement of the statistics.
          unit_of_measurement?: string;
          // If the statistics has a mean value.
          has_mean: boolean;
          // If the statistics has a sum value.
          has_sum: boolean;
          // A list of mappings/dictionaries with statistics to import. The dictionaries must contain a 'start' key with a datetime string other valid options are 'mean', 'sum', 'min', 'max', 'last_reset', and 'state'. All of those are optional and either an integer or a float, except for 'last_reset' which is a datetime string.
          stats: object;
        }
      >;
    };
    person: {
      // Reloads persons from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Remove a device tracker from a person.
      removeDeviceTracker: ServiceFunction<
        T,
        {
          // The person entity ID to remove the device tracker from.
          entity_id: string;
          // The device tracker entity ID to remove from the person.
          device_tracker: string;
        }
      >;
      // Add a device tracker to a person.
      addDeviceTracker: ServiceFunction<
        T,
        {
          // The person entity ID to add the device tracker to.
          entity_id: string;
          // The device tracker entity ID to add to the person.
          device_tracker: string;
        }
      >;
    };
    frontend: {
      // Sets the default theme Home Assistant uses. Can be overridden by a user.
      setTheme: ServiceFunction<
        T,
        {
          // Name of a theme. @example default
          name: object;
          // Theme mode.
          mode?: 'dark' | 'light';
        }
      >;
      // Reloads themes from the YAML-configuration.
      reloadThemes: ServiceFunction<T, object>;
    };
    cloud: {
      // Makes the instance UI accessible from outside of the local network by using Home Assistant Cloud.
      remoteConnect: ServiceFunction<T, object>;
      // Disconnects the Home Assistant UI from the Home Assistant Cloud. You will no longer be able to access your Home Assistant instance from outside your local network.
      remoteDisconnect: ServiceFunction<T, object>;
    };
    ffmpeg: {
      // Sends a start command to a ffmpeg based sensor.
      start: ServiceFunction<
        T,
        {
          // Name of entity that will start. Platform dependent.
          entity_id?: string;
        }
      >;
      // Sends a stop command to a ffmpeg based sensor.
      stop: ServiceFunction<
        T,
        {
          // Name of entity that will stop. Platform dependent.
          entity_id?: string;
        }
      >;
      // Sends a restart command to a ffmpeg based sensor.
      restart: ServiceFunction<
        T,
        {
          // Name of entity that will restart. Platform dependent.
          entity_id?: string;
        }
      >;
    };
    tts: {
      // Speaks something using text-to-speech on a media player.
      speak: ServiceFunction<
        T,
        {
          // Media players to play the message.
          media_player_entity_id: string;
          // The text you want to convert into speech so that you can listen to it on your device. @example My name is hanna
          message: string;
          // Stores this message locally so that when the text is requested again, the output can be produced more quickly.
          cache?: boolean;
          // Language to use for speech generation. @example ru
          language?: string;
          // A dictionary containing integration-specific options. @example platform specific
          options?: object;
        }
      >;
      // Removes all cached text-to-speech files and purges the memory.
      clearCache: ServiceFunction<T, object>;
      // Say something using text-to-speech on a media player with cloud.
      cloudSay: ServiceFunction<
        T,
        {
          // undefined
          entity_id: string;
          // undefined @example My name is hanna
          message: string;
          // undefined
          cache?: boolean;
          // undefined @example ru
          language?: string;
          // undefined @example platform specific
          options?: object;
        }
      >;
      // Say something using text-to-speech on a media player with google_translate.
      googleTranslateSay: ServiceFunction<
        T,
        {
          // undefined
          entity_id: string;
          // undefined @example My name is hanna
          message: string;
          // undefined
          cache?: boolean;
          // undefined @example ru
          language?: string;
          // undefined @example platform specific
          options?: object;
        }
      >;
    };
    scene: {
      // Reloads the scenes from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Activates a scene with configuration.
      apply: ServiceFunction<
        T,
        {
          // List of entities and their target state. @example light.kitchen: 'on' light.ceiling:   state: 'on'   brightness: 80
          entities: object;
          // Time it takes the devices to transition into the states defined in the scene.
          transition?: number;
        }
      >;
      // Creates a new scene.
      create: ServiceFunction<
        T,
        {
          // The entity ID of the new scene. @example all_lights
          scene_id: string;
          // List of entities and their target state. If your entities are already in the target state right now, use `snapshot_entities` instead. @example light.tv_back_light: 'on' light.ceiling:   state: 'on'   brightness: 200
          entities?: object;
          // List of entities to be included in the snapshot. By taking a snapshot, you record the current state of those entities. If you do not want to use the current state of all your entities for this scene, you can combine the `snapshot_entities` with `entities`. @example - light.ceiling - light.kitchen
          snapshot_entities?: string;
        }
      >;
      // Deletes a dynamically created scene.
      delete: ServiceFunction<T, object>;
      // Activates a scene.
      turnOn: ServiceFunction<
        T,
        {
          // Time it takes the devices to transition into the states defined in the scene.
          transition?: number;
        }
      >;
    };
    select: {
      // Selects the first option.
      selectFirst: ServiceFunction<T, object>;
      // Selects the last option.
      selectLast: ServiceFunction<T, object>;
      // Selects the next option.
      selectNext: ServiceFunction<
        T,
        {
          // If the option should cycle from the last to the first.
          cycle?: boolean;
        }
      >;
      // Selects an option.
      selectOption: ServiceFunction<
        T,
        {
          // Option to be selected. @example 'Item A'
          option: string;
        }
      >;
      // Selects the previous option.
      selectPrevious: ServiceFunction<
        T,
        {
          // If the option should cycle from the first to the last.
          cycle?: boolean;
        }
      >;
      // Select an random option for a select entity.
      random: ServiceFunction<
        T,
        {
          // Limits the options to select from. If not provided, all options will be considered.
          options?: object;
        }
      >;
    };
    number: {
      // Sets the value of a number.
      setValue: ServiceFunction<
        T,
        {
          // The target value to set. @example 42
          value?: string;
        }
      >;
      // Set a number entity to its maximum value.
      max: ServiceFunction<T, object>;
      // Set a number entity to its minimum value.
      min: ServiceFunction<T, object>;
      // Increase a number entity value by a certain amount.
      increment: ServiceFunction<
        T,
        {
          // The amount to increase the number with. If not provided, the step of the number entity will be used.
          amount?: number;
        }
      >;
      // Decrease a number entity value by a certain amount.
      decrement: ServiceFunction<
        T,
        {
          // The amount to decrease the number with. If not provided, the step of the number entity will be used.
          amount?: number;
        }
      >;
    };
    light: {
      // Turn on one or more lights and adjust properties of the light, even when they are turned on already.
      turnOn: ServiceFunction<
        T,
        {
          // Duration it takes to get to next state.
          transition?: number;
          // The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue. @example [255, 100, 100]
          rgb_color?: [number, number, number];
          // The color in RGBW format. A list of four integers between 0 and 255 representing the values of red, green, blue, and white. @example [255, 100, 100, 50]
          rgbw_color?: [number, number, number, number];
          // The color in RGBWW format. A list of five integers between 0 and 255 representing the values of red, green, blue, cold white, and warm white. @example [255, 100, 100, 50, 70]
          rgbww_color?: [number, number, number, number, number];
          // A human-readable color name.
          color_name?:
            | 'homeassistant'
            | 'aliceblue'
            | 'antiquewhite'
            | 'aqua'
            | 'aquamarine'
            | 'azure'
            | 'beige'
            | 'bisque'
            | 'blanchedalmond'
            | 'blue'
            | 'blueviolet'
            | 'brown'
            | 'burlywood'
            | 'cadetblue'
            | 'chartreuse'
            | 'chocolate'
            | 'coral'
            | 'cornflowerblue'
            | 'cornsilk'
            | 'crimson'
            | 'cyan'
            | 'darkblue'
            | 'darkcyan'
            | 'darkgoldenrod'
            | 'darkgray'
            | 'darkgreen'
            | 'darkgrey'
            | 'darkkhaki'
            | 'darkmagenta'
            | 'darkolivegreen'
            | 'darkorange'
            | 'darkorchid'
            | 'darkred'
            | 'darksalmon'
            | 'darkseagreen'
            | 'darkslateblue'
            | 'darkslategray'
            | 'darkslategrey'
            | 'darkturquoise'
            | 'darkviolet'
            | 'deeppink'
            | 'deepskyblue'
            | 'dimgray'
            | 'dimgrey'
            | 'dodgerblue'
            | 'firebrick'
            | 'floralwhite'
            | 'forestgreen'
            | 'fuchsia'
            | 'gainsboro'
            | 'ghostwhite'
            | 'gold'
            | 'goldenrod'
            | 'gray'
            | 'green'
            | 'greenyellow'
            | 'grey'
            | 'honeydew'
            | 'hotpink'
            | 'indianred'
            | 'indigo'
            | 'ivory'
            | 'khaki'
            | 'lavender'
            | 'lavenderblush'
            | 'lawngreen'
            | 'lemonchiffon'
            | 'lightblue'
            | 'lightcoral'
            | 'lightcyan'
            | 'lightgoldenrodyellow'
            | 'lightgray'
            | 'lightgreen'
            | 'lightgrey'
            | 'lightpink'
            | 'lightsalmon'
            | 'lightseagreen'
            | 'lightskyblue'
            | 'lightslategray'
            | 'lightslategrey'
            | 'lightsteelblue'
            | 'lightyellow'
            | 'lime'
            | 'limegreen'
            | 'linen'
            | 'magenta'
            | 'maroon'
            | 'mediumaquamarine'
            | 'mediumblue'
            | 'mediumorchid'
            | 'mediumpurple'
            | 'mediumseagreen'
            | 'mediumslateblue'
            | 'mediumspringgreen'
            | 'mediumturquoise'
            | 'mediumvioletred'
            | 'midnightblue'
            | 'mintcream'
            | 'mistyrose'
            | 'moccasin'
            | 'navajowhite'
            | 'navy'
            | 'navyblue'
            | 'oldlace'
            | 'olive'
            | 'olivedrab'
            | 'orange'
            | 'orangered'
            | 'orchid'
            | 'palegoldenrod'
            | 'palegreen'
            | 'paleturquoise'
            | 'palevioletred'
            | 'papayawhip'
            | 'peachpuff'
            | 'peru'
            | 'pink'
            | 'plum'
            | 'powderblue'
            | 'purple'
            | 'red'
            | 'rosybrown'
            | 'royalblue'
            | 'saddlebrown'
            | 'salmon'
            | 'sandybrown'
            | 'seagreen'
            | 'seashell'
            | 'sienna'
            | 'silver'
            | 'skyblue'
            | 'slateblue'
            | 'slategray'
            | 'slategrey'
            | 'snow'
            | 'springgreen'
            | 'steelblue'
            | 'tan'
            | 'teal'
            | 'thistle'
            | 'tomato'
            | 'turquoise'
            | 'violet'
            | 'wheat'
            | 'white'
            | 'whitesmoke'
            | 'yellow'
            | 'yellowgreen';
          // Color in hue/sat format. A list of two integers. Hue is 0-360 and Sat is 0-100. @example [300, 70]
          hs_color?: [number, number];
          // Color in XY-format. A list of two decimal numbers between 0 and 1. @example [0.52, 0.43]
          xy_color?: [number, number];
          // Color temperature in mireds.
          color_temp?: number | object;
          // Color temperature in Kelvin.
          kelvin?: number | object;
          // Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness, and 255 is the maximum brightness.
          brightness?: number;
          // Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.
          brightness_pct?: number;
          // Change brightness by an amount.
          brightness_step?: number;
          // Change brightness by a percentage.
          brightness_step_pct?: number;
          // Set the light to white mode.
          white?: boolean;
          // Name of a light profile to use. @example relax
          profile?: string;
          // Tell light to flash, can be either value short or long.
          flash?: 'long' | 'short';
          // Light effect.
          effect?: string;
        }
      >;
      // Turn off one or more lights.
      turnOff: ServiceFunction<
        T,
        {
          // Duration it takes to get to next state.
          transition?: number;
          // Tell light to flash, can be either value short or long.
          flash?: 'long' | 'short';
        }
      >;
      // Toggles one or more lights, from on to off, or, off to on, based on their current state.
      toggle: ServiceFunction<
        T,
        {
          // Duration it takes to get to next state.
          transition?: number;
          // The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue. @example [255, 100, 100]
          rgb_color?: [number, number, number];
          // The color in RGBW format. A list of four integers between 0 and 255 representing the values of red, green, blue, and white. @example [255, 100, 100, 50]
          rgbw_color?: [number, number, number, number];
          // The color in RGBWW format. A list of five integers between 0 and 255 representing the values of red, green, blue, cold white, and warm white. @example [255, 100, 100, 50, 70]
          rgbww_color?: [number, number, number, number, number];
          // A human-readable color name.
          color_name?:
            | 'homeassistant'
            | 'aliceblue'
            | 'antiquewhite'
            | 'aqua'
            | 'aquamarine'
            | 'azure'
            | 'beige'
            | 'bisque'
            | 'blanchedalmond'
            | 'blue'
            | 'blueviolet'
            | 'brown'
            | 'burlywood'
            | 'cadetblue'
            | 'chartreuse'
            | 'chocolate'
            | 'coral'
            | 'cornflowerblue'
            | 'cornsilk'
            | 'crimson'
            | 'cyan'
            | 'darkblue'
            | 'darkcyan'
            | 'darkgoldenrod'
            | 'darkgray'
            | 'darkgreen'
            | 'darkgrey'
            | 'darkkhaki'
            | 'darkmagenta'
            | 'darkolivegreen'
            | 'darkorange'
            | 'darkorchid'
            | 'darkred'
            | 'darksalmon'
            | 'darkseagreen'
            | 'darkslateblue'
            | 'darkslategray'
            | 'darkslategrey'
            | 'darkturquoise'
            | 'darkviolet'
            | 'deeppink'
            | 'deepskyblue'
            | 'dimgray'
            | 'dimgrey'
            | 'dodgerblue'
            | 'firebrick'
            | 'floralwhite'
            | 'forestgreen'
            | 'fuchsia'
            | 'gainsboro'
            | 'ghostwhite'
            | 'gold'
            | 'goldenrod'
            | 'gray'
            | 'green'
            | 'greenyellow'
            | 'grey'
            | 'honeydew'
            | 'hotpink'
            | 'indianred'
            | 'indigo'
            | 'ivory'
            | 'khaki'
            | 'lavender'
            | 'lavenderblush'
            | 'lawngreen'
            | 'lemonchiffon'
            | 'lightblue'
            | 'lightcoral'
            | 'lightcyan'
            | 'lightgoldenrodyellow'
            | 'lightgray'
            | 'lightgreen'
            | 'lightgrey'
            | 'lightpink'
            | 'lightsalmon'
            | 'lightseagreen'
            | 'lightskyblue'
            | 'lightslategray'
            | 'lightslategrey'
            | 'lightsteelblue'
            | 'lightyellow'
            | 'lime'
            | 'limegreen'
            | 'linen'
            | 'magenta'
            | 'maroon'
            | 'mediumaquamarine'
            | 'mediumblue'
            | 'mediumorchid'
            | 'mediumpurple'
            | 'mediumseagreen'
            | 'mediumslateblue'
            | 'mediumspringgreen'
            | 'mediumturquoise'
            | 'mediumvioletred'
            | 'midnightblue'
            | 'mintcream'
            | 'mistyrose'
            | 'moccasin'
            | 'navajowhite'
            | 'navy'
            | 'navyblue'
            | 'oldlace'
            | 'olive'
            | 'olivedrab'
            | 'orange'
            | 'orangered'
            | 'orchid'
            | 'palegoldenrod'
            | 'palegreen'
            | 'paleturquoise'
            | 'palevioletred'
            | 'papayawhip'
            | 'peachpuff'
            | 'peru'
            | 'pink'
            | 'plum'
            | 'powderblue'
            | 'purple'
            | 'red'
            | 'rosybrown'
            | 'royalblue'
            | 'saddlebrown'
            | 'salmon'
            | 'sandybrown'
            | 'seagreen'
            | 'seashell'
            | 'sienna'
            | 'silver'
            | 'skyblue'
            | 'slateblue'
            | 'slategray'
            | 'slategrey'
            | 'snow'
            | 'springgreen'
            | 'steelblue'
            | 'tan'
            | 'teal'
            | 'thistle'
            | 'tomato'
            | 'turquoise'
            | 'violet'
            | 'wheat'
            | 'white'
            | 'whitesmoke'
            | 'yellow'
            | 'yellowgreen';
          // Color in hue/sat format. A list of two integers. Hue is 0-360 and Sat is 0-100. @example [300, 70]
          hs_color?: [number, number];
          // Color in XY-format. A list of two decimal numbers between 0 and 1. @example [0.52, 0.43]
          xy_color?: [number, number];
          // Color temperature in mireds.
          color_temp?: number | object;
          // Color temperature in Kelvin.
          kelvin?: number | object;
          // Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness, and 255 is the maximum brightness.
          brightness?: number;
          // Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.
          brightness_pct?: number;
          // Set the light to white mode.
          white?: boolean;
          // Name of a light profile to use. @example relax
          profile?: string;
          // Tell light to flash, can be either value short or long.
          flash?: 'long' | 'short';
          // Light effect.
          effect?: string;
        }
      >;
    };
    inputSelect: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Selects the first option.
      selectFirst: ServiceFunction<T, object>;
      // Selects the last option.
      selectLast: ServiceFunction<T, object>;
      // Select the next option.
      selectNext: ServiceFunction<
        T,
        {
          // If the option should cycle from the last to the first option on the list.
          cycle?: boolean;
        }
      >;
      // Selects an option.
      selectOption: ServiceFunction<
        T,
        {
          // Option to be selected. @example 'Item A'
          option: string;
        }
      >;
      // Selects the previous option.
      selectPrevious: ServiceFunction<
        T,
        {
          // If the option should cycle from the last to the first option on the list.
          cycle?: boolean;
        }
      >;
      // Sets the options.
      setOptions: ServiceFunction<
        T,
        {
          // List of options. @example ['Item A', 'Item B', 'Item C']
          options: object;
        }
      >;
      // Sorts the list of selectable options for an `input_select` entity. This is not persistent and will be undone once reloaded or Home Assistant restarts.
      sort: ServiceFunction<T, object>;
      // Select an random option for an input_select entity.
      random: ServiceFunction<
        T,
        {
          // Limits the options to select from. If not provided, all options will be considered.
          options?: object;
        }
      >;
      // Shuffles the list of selectable options for an `input_select` entity. This is not persistent and will be undone once reloaded or Home Assistant restarts.
      shuffle: ServiceFunction<T, object>;
    };
    logbook: {
      // Creates a custom entry in the logbook.
      log: ServiceFunction<
        T,
        {
          // Custom name for an entity, can be referenced using an `entity_id`. @example Kitchen
          name: string;
          // Message of the logbook entry. @example is being used
          message: string;
          // Entity to reference in the logbook entry.
          entity_id?: string;
          // Determines which icon is used in the logbook entry. The icon illustrates the integration domain related to this logbook entry. @example light
          domain?: string;
        }
      >;
    };
    group: {
      // Reloads group configuration, entities, and notify services from YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Creates/Updates a user group.
      set: ServiceFunction<
        T,
        {
          // Object ID of this group. This object ID is used as part of the entity ID. Entity ID format: [domain].[object_id]. @example test_group
          object_id: string;
          // Name of the group. @example My test group
          name?: string;
          // Name of the icon for the group. @example mdi:camera
          icon?: object;
          // List of all members in the group. Cannot be used in combination with `Add entities` or `Remove entities`. @example domain.entity_id1, domain.entity_id2
          entities?: string;
          // List of members to be added to the group. Cannot be used in combination with `Entities` or `Remove entities`. @example domain.entity_id1, domain.entity_id2
          add_entities?: string;
          // List of members to be removed from a group. Cannot be used in combination with `Entities` or `Add entities`. @example domain.entity_id1, domain.entity_id2
          remove_entities?: string;
          // Enable this option if the group should only be used when all entities are in state `on`.
          all?: boolean;
        }
      >;
      // Removes a group.
      remove: ServiceFunction<
        T,
        {
          // Object ID of this group. This object ID is used as part of the entity ID. Entity ID format: [domain].[object_id]. @example test_group
          object_id: object;
        }
      >;
    };
    switch: {
      // Turns a switch off.
      turnOff: ServiceFunction<T, object>;
      // Turns a switch on.
      turnOn: ServiceFunction<T, object>;
      // Toggles a switch on/off.
      toggle: ServiceFunction<T, object>;
    };
    cover: {
      // Opens a cover.
      openCover: ServiceFunction<T, object>;
      // Closes a cover.
      closeCover: ServiceFunction<T, object>;
      // Moves a cover to a specific position.
      setCoverPosition: ServiceFunction<
        T,
        {
          // Target position.
          position: number;
        }
      >;
      // Stops the cover movement.
      stopCover: ServiceFunction<T, object>;
      // Toggles a cover open/closed.
      toggle: ServiceFunction<T, object>;
      // Tilts a cover open.
      openCoverTilt: ServiceFunction<T, object>;
      // Tilts a cover to close.
      closeCoverTilt: ServiceFunction<T, object>;
      // Stops a tilting cover movement.
      stopCoverTilt: ServiceFunction<T, object>;
      // Moves a cover tilt to a specific position.
      setCoverTiltPosition: ServiceFunction<
        T,
        {
          // Target tilt positition.
          tilt_position: number;
        }
      >;
      // Toggles a cover tilt open/closed.
      toggleCoverTilt: ServiceFunction<T, object>;
    };
    inputNumber: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Sets the value.
      setValue: ServiceFunction<
        T,
        {
          // The target value.
          value: number;
        }
      >;
      // Set an input number entity to its maximum value.
      max: ServiceFunction<T, object>;
      // Set an input number entity to its minimum value.
      min: ServiceFunction<T, object>;
      // Increase an input number entity value by a certain amount.
      increment: ServiceFunction<
        T,
        {
          // The amount to increase the input number with. If not provided, the step of the number entity will be used.
          amount?: number;
        }
      >;
      // Decrease an input number entity value by a certain amount.
      decrement: ServiceFunction<
        T,
        {
          // The amount to decrease the input number with. If not provided, the step of the number entity will be used.
          amount?: number;
        }
      >;
    };
    zone: {
      // Reloads zones from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Create a new zone in Home Assistant on the fly.
      create: ServiceFunction<
        T,
        {
          // Name of the zone
          name: string;
          // Icon to use for the zone
          icon?: object;
          // Latitude of the zone
          latitude: number;
          // Longitude of the zone
          longitude: number;
          // Radius of the zone
          radius?: number;
        }
      >;
      // Delete a zone. This works only with zones created and managed via the UI. Zones created and managed in YAML cannot be managed by Spook.
      delete: ServiceFunction<
        T,
        {
          // The ID of the entity (or entities) to remove.
          entity_id: string;
        }
      >;
      // Update properties of a zone on the fly.
      update: ServiceFunction<
        T,
        {
          // The ID of the entity (or entities) to update.
          entity_id: string;
          // Name of the zone
          name?: string;
          // Icon to use for the zone
          icon?: object;
          // Latitude of the zone
          latitude?: number;
          // Longitude of the zone
          longitude?: number;
          // Radius of the zone
          radius?: number;
        }
      >;
    };
    inputBoolean: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Turns on the helper.
      turnOn: ServiceFunction<T, object>;
      // Turns off the helper.
      turnOff: ServiceFunction<T, object>;
      // Toggles the helper on/off.
      toggle: ServiceFunction<T, object>;
    };
    timer: {
      // Reloads timers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Starts a timer.
      start: ServiceFunction<
        T,
        {
          // Duration the timer requires to finish. [optional]. @example 00:01:00 or 60
          duration?: string;
        }
      >;
      // Pauses a timer.
      pause: ServiceFunction<T, object>;
      // Cancels a timer.
      cancel: ServiceFunction<T, object>;
      // Finishes a timer.
      finish: ServiceFunction<T, object>;
      // Changes a timer.
      change: ServiceFunction<
        T,
        {
          // Duration to add or subtract to the running timer. @example 00:01:00, 60 or -60
          duration: string;
        }
      >;
      // Set duration for an existing timer.
      setDuration: ServiceFunction<
        T,
        {
          // New duration for the timer, as a timedelta string. @example 00:01:00, 60
          duration: string;
        }
      >;
    };
    inputButton: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Mimics the physical button press on the device.
      press: ServiceFunction<T, object>;
    };
    statistics: {
      // Reloads statistics sensors from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    rest: {
      // Reloads REST entities from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    conversation: {
      // Launches a conversation from a transcribed text.
      process: ServiceFunction<
        T,
        {
          // Transcribed text input. @example Turn all lights on
          text: string;
          // Language of text. Defaults to server language. @example NL
          language?: string;
          // Conversation agent to process your request. The conversation agent is the brains of your assistant. It processes the incoming text commands. @example homeassistant
          agent_id?: object;
          // ID of the conversation, to be able to continue a previous conversation @example my_conversation_1
          conversation_id?: string;
        }
      >;
      // Reloads the intent configuration.
      reload: ServiceFunction<
        T,
        {
          // Language to clear cached intents for. Defaults to server language. @example NL
          language?: string;
          // Conversation agent to reload. @example homeassistant
          agent_id?: object;
        }
      >;
    };
    localtuya: {
      // Reload localtuya and reconnect to all devices.
      reload: ServiceFunction<T, object>;
      // Change the value of a datapoint (DP)
      setDp: ServiceFunction<
        T,
        {
          // Device ID of device to change datapoint value for @example 11100118278aab4de001
          device_id?: object;
          // Datapoint index @example 1
          dp?: object;
          // New value to set
          value?: object;
        }
      >;
    };
    fan: {
      // Turns fan on.
      turnOn: ServiceFunction<
        T,
        {
          // Speed of the fan.
          percentage?: number;
          // Preset mode. @example auto
          preset_mode?: string;
        }
      >;
      // Turns fan off.
      turnOff: ServiceFunction<T, object>;
      // Toggles the fan on/off.
      toggle: ServiceFunction<T, object>;
      // Increases the speed of the fan.
      increaseSpeed: ServiceFunction<
        T,
        {
          // Increases the speed by a percentage step.
          percentage_step?: number;
        }
      >;
      // Decreases the speed of the fan.
      decreaseSpeed: ServiceFunction<
        T,
        {
          // Decreases the speed by a percentage step.
          percentage_step?: number;
        }
      >;
      // Controls oscillatation of the fan.
      oscillate: ServiceFunction<
        T,
        {
          // Turn on/off oscillation.
          oscillating: boolean;
        }
      >;
      // Sets the fan rotation direction.
      setDirection: ServiceFunction<
        T,
        {
          // Direction to rotate.
          direction: 'forward' | 'reverse';
        }
      >;
      // Sets the fan speed.
      setPercentage: ServiceFunction<
        T,
        {
          // Speed of the fan.
          percentage: number;
        }
      >;
      // Sets preset mode.
      setPresetMode: ServiceFunction<
        T,
        {
          // Preset mode. @example auto
          preset_mode: string;
        }
      >;
    };
    inputDatetime: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Sets the date and/or time.
      setDatetime: ServiceFunction<
        T,
        {
          // The target date. @example '2019-04-20'
          date?: string;
          // The target time. @example '05:04:20'
          time?: object;
          // The target date & time. @example '2019-04-20 05:04:20'
          datetime?: string;
          // The target date & time, expressed by a UNIX timestamp.
          timestamp?: number;
        }
      >;
    };
    inputText: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Sets the value.
      setValue: ServiceFunction<
        T,
        {
          // The target value. @example This is an example text
          value: string;
        }
      >;
    };
    adaptiveLighting: {
      // Applies the current Adaptive Lighting settings to lights.
      apply: ServiceFunction<
        T,
        {
          // The `entity_id` of the switch with the settings to apply. 📝
          entity_id?: string;
          // A light (or list of lights) to apply the settings to. 💡
          lights?: string;
          // Duration of transition when lights change, in seconds. 🕑 @example 10
          transition?: string;
          // Whether to adapt the brightness of the light. 🌞 @example true
          adapt_brightness?: boolean;
          // Whether to adapt the color on supporting lights. 🌈 @example true
          adapt_color?: boolean;
          // Whether to prefer RGB color adjustment over light color temperature when possible. 🌈
          prefer_rgb_color?: boolean;
          // Whether to turn on lights that are currently off. 🔆
          turn_on_lights?: boolean;
        }
      >;
      // Mark whether a light is 'manually controlled'.
      setManualControl: ServiceFunction<
        T,
        {
          // The `entity_id` of the switch in which to (un)mark the light as being `manually controlled`. 📝
          entity_id?: string;
          // entity_id(s) of lights, if not specified, all lights in the switch are selected. 💡
          lights?: string;
          // Whether to add ('true') or remove ('false') the light from the 'manual_control' list. 🔒 @example true
          manual_control?: boolean;
        }
      >;
      // Change any settings you'd like in the switch. All options here are the same as in the config flow.
      changeSwitchSettings: ServiceFunction<
        T,
        {
          // Entity ID of the switch. 📝
          entity_id: string;
          // Sets the default values not specified in this service call. Options: 'current' (default, retains current values), 'factory' (resets to documented defaults), or 'configuration' (reverts to switch config defaults). ⚙️ @example current
          use_defaults?: 'current' | 'configuration' | 'factory';
          // Show all options as attributes on the switch in Home Assistant when set to `true`. 📝
          include_config_in_attributes?: boolean;
          // Whether to turn on lights that are currently off. 🔆
          turn_on_lights?: boolean;
          // Duration of the first transition when lights turn from `off` to `on` in seconds. ⏲️ @example 1
          initial_transition?: string;
          // Duration of transition when 'sleep mode' is toggled in seconds. 😴 @example 1
          sleep_transition?: string;
          // Maximum brightness percentage. 💡 @example 100
          max_brightness?: string;
          // Coldest color temperature in Kelvin. ❄️ @example 5500
          max_color_temp?: string;
          // Minimum brightness percentage. 💡 @example 1
          min_brightness?: string;
          // Warmest color temperature in Kelvin. 🔥 @example 2000
          min_color_temp?: string;
          // Adapt lights only when they are turned on (`true`) or keep adapting them (`false`). 🔄
          only_once?: boolean;
          // Whether to prefer RGB color adjustment over light color temperature when possible. 🌈
          prefer_rgb_color?: boolean;
          // Use separate `light.turn_on` calls for color and brightness, needed for some light types. 🔀
          separate_turn_on_commands?: boolean;
          // Delay (ms) between `separate_turn_on_commands` for lights that don't support simultaneous brightness and color setting. ⏲️
          send_split_delay?: boolean;
          // Brightness percentage of lights in sleep mode. 😴 @example 1
          sleep_brightness?: string;
          // Use either `'rgb_color'` or `'color_temp'` in sleep mode. 🌙 @example color_temp
          sleep_rgb_or_color_temp?: 'rgb_color' | 'color_temp';
          // RGB color in sleep mode (used when `sleep_rgb_or_color_temp` is 'rgb_color'). 🌈
          sleep_rgb_color?: object;
          // Color temperature in sleep mode (used when `sleep_rgb_or_color_temp` is `color_temp`) in Kelvin. 😴 @example 1000
          sleep_color_temp?: string;
          // Adjust sunrise time with a positive or negative offset in seconds. ⏰
          sunrise_offset?: number;
          // Set a fixed time (HH:MM:SS) for sunrise. 🌅
          sunrise_time?: object;
          // Adjust sunset time with a positive or negative offset in seconds. ⏰
          sunset_offset?: number;
          // Set a fixed time (HH:MM:SS) for sunset. 🌇
          sunset_time?: object;
          // Set the latest virtual sunrise time (HH:MM:SS), allowing for earlier sunrises. 🌅
          max_sunrise_time?: object;
          // Set the earliest virtual sunset time (HH:MM:SS), allowing for later sunsets. 🌇
          min_sunset_time?: object;
          // Disable Adaptive Lighting if another source calls `light.turn_on` while lights are on and being adapted. Note that this calls `homeassistant.update_entity` every `interval`! 🔒 @example true
          take_over_control?: boolean;
          // Detects and halts adaptations for non-`light.turn_on` state changes. Needs `take_over_control` enabled. 🕵️ Caution: ⚠️ Some lights might falsely indicate an 'on' state, which could result in lights turning on unexpectedly. Disable this feature if you encounter such issues.
          detect_non_ha_changes?: boolean;
          // Duration of transition when lights change, in seconds. 🕑 @example 45
          transition?: string;
          // Wait time (seconds) between light turn on and Adaptive Lighting applying changes. Might help to avoid flickering. ⏲️
          adapt_delay?: string;
          // Automatically reset the manual control after a number of seconds. Set to 0 to disable. ⏲️
          autoreset_control_seconds?: string;
        }
      >;
    };
    counter: {
      // Increments a counter.
      increment: ServiceFunction<T, object>;
      // Decrements a counter.
      decrement: ServiceFunction<T, object>;
      // Resets a counter.
      reset: ServiceFunction<T, object>;
      // Sets the counter value.
      setValue: ServiceFunction<
        T,
        {
          // The new counter value the entity should be set to.
          value: number;
        }
      >;
    };
    climate: {
      // Turns climate device on.
      turnOn: ServiceFunction<T, object>;
      // Turns climate device off.
      turnOff: ServiceFunction<T, object>;
      // Toggles climate device, from on to off, or off to on.
      toggle: ServiceFunction<T, object>;
      // Sets HVAC operation mode.
      setHvacMode: ServiceFunction<
        T,
        {
          // HVAC operation mode.
          hvac_mode?: 'off' | 'auto' | 'cool' | 'dry' | 'fan_only' | 'heat_cool' | 'heat';
        }
      >;
      // Sets preset mode.
      setPresetMode: ServiceFunction<
        T,
        {
          // Preset mode. @example away
          preset_mode: string;
        }
      >;
      // Turns auxiliary heater on/off.
      setAuxHeat: ServiceFunction<
        T,
        {
          // New value of auxiliary heater.
          aux_heat: boolean;
        }
      >;
      // Sets target temperature.
      setTemperature: ServiceFunction<
        T,
        {
          // Target temperature.
          temperature?: number;
          // High target temperature.
          target_temp_high?: number;
          // Low target temperature.
          target_temp_low?: number;
          // HVAC operation mode.
          hvac_mode?: 'off' | 'auto' | 'cool' | 'dry' | 'fan_only' | 'heat_cool' | 'heat';
        }
      >;
      // Sets target humidity.
      setHumidity: ServiceFunction<
        T,
        {
          // Target humidity.
          humidity: number;
        }
      >;
      // Sets fan operation mode.
      setFanMode: ServiceFunction<
        T,
        {
          // Fan operation mode. @example low
          fan_mode: string;
        }
      >;
      // Sets swing operation mode.
      setSwingMode: ServiceFunction<
        T,
        {
          // Swing operation mode. @example horizontal
          swing_mode: string;
        }
      >;
    };
    lock: {
      // Unlocks a lock.
      unlock: ServiceFunction<
        T,
        {
          // Code used to unlock the lock. @example 1234
          code?: string;
        }
      >;
      // Locks a lock.
      lock: ServiceFunction<
        T,
        {
          // Code used to lock the lock. @example 1234
          code?: string;
        }
      >;
      // Opens a lock.
      open: ServiceFunction<
        T,
        {
          // Code used to open the lock. @example 1234
          code?: string;
        }
      >;
    };
    homekit: {
      // Resets a HomeKit accessory.
      resetAccessory: ServiceFunction<T, object>;
      // Forcefully removes all pairings from an accessory to allow re-pairing. Use this service if the accessory is no longer responsive, and you want to avoid deleting and re-adding the entry. Room locations, and accessory preferences will be lost.
      unpair: ServiceFunction<T, object>;
      // Reloads homekit and re-process YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    camera: {
      // Enables the motion detection.
      enableMotionDetection: ServiceFunction<T, object>;
      // Disables the motion detection.
      disableMotionDetection: ServiceFunction<T, object>;
      // Turns off the camera.
      turnOff: ServiceFunction<T, object>;
      // Turns on the camera.
      turnOn: ServiceFunction<T, object>;
      // Takes a snapshot from a camera.
      snapshot: ServiceFunction<
        T,
        {
          // Template of a filename. Variable available is `entity_id`. @example /tmp/snapshot_{{ entity_id.name }}.jpg
          filename: string;
        }
      >;
      // Plays the camera stream on a supported media player.
      playStream: ServiceFunction<
        T,
        {
          // Media players to stream to.
          media_player: string;
          // Stream format supported by the media player.
          format?: 'hls';
        }
      >;
      // Creates a recording of a live camera feed.
      record: ServiceFunction<
        T,
        {
          // Template of a filename. Variable available is `entity_id`. Must be mp4. @example /tmp/snapshot_{{ entity_id.name }}.mp4
          filename: string;
          // Planned duration of the recording. The actual duration may vary.
          duration?: number;
          // Planned lookback period to include in the recording (in addition to the duration). Only available if there is currently an active HLS stream. The actual length of the lookback period may vary.
          lookback?: number;
        }
      >;
    };
    template: {
      // Reloads template entities from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    utilityMeter: {
      // Resets all counters of a utility meter.
      reset: ServiceFunction<T, object>;
      // Calibrates a utility meter sensor.
      calibrate: ServiceFunction<
        T,
        {
          // Value to which set the meter. @example 100
          value: string;
        }
      >;
    };
    notify: {
      // Sends a notification message.
      sendMessage: ServiceFunction<
        T,
        {
          // Your notification message.
          message: string;
          // Title for your notification message.
          title?: string;
        }
      >;
      // Sends a notification that is visible in the **Notifications** panel.
      persistentNotification: ServiceFunction<
        T,
        {
          // Message body of the notification. @example The garage door has been open for 10 minutes.
          message: string;
          // Title of the notification. @example Your Garage Door Friend
          title?: string;
          // Some integrations provide extended functionality. For information on how to use _data_, refer to the integration documentation.. @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_ipad integration.
      mobileAppIpad: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_henriettes_iphone integration.
      mobileAppHenriettesIphone: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_iphone_3 integration.
      mobileAppIphone3: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the notify service.
      notify: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the fastforward service.
      fastforward: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the stuetv service.
      stuetv: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the kontorettv service.
      kontorettv: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
    };
    schedule: {
      // Reloads schedules from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    presenceSimulation: {
      // Start the presence simulation
      start: ServiceFunction<
        T,
        {
          // The id of the presence simulation switch @example switch.presence_simulation_2
          switch_id?: object;
          // The list of entities to use by the presence simulation to override the list configured in the component @example - group.outside_lights
          entity_id?: object;
          // Override the default number of days used by the simulation @example 7
          delta?: object;
          // Override the default restore switch. If set, the states will be restored after the simulation @example true
          restore_states?: object;
          // Add a random factor (in seconds) to the historic events @example 300
          random?: object;
        }
      >;
      // Stop the presence simulation
      stop: ServiceFunction<
        T,
        {
          // The id of the presence simulation switch @example switch.presence_simulation_2
          switch_id?: object;
        }
      >;
      // Toggle the presence simulation
      toggle: ServiceFunction<
        T,
        {
          // The id of the presence simulation switch @example switch.presence_simulation_2
          switch_id?: object;
        }
      >;
    };
    backup: {
      // Creates a new backup.
      create: ServiceFunction<T, object>;
    };
    cast: {
      // Shows a dashboard view on a Chromecast device.
      showLovelaceView: ServiceFunction<
        T,
        {
          // Media player entity to show the dashboard view on.
          entity_id: string;
          // The URL path of the dashboard to show. @example lovelace-cast
          dashboard_path: string;
          // The path of the dashboard view to show. @example downstairs
          view_path?: string;
        }
      >;
    };
    wazeTravelTime: {
      // Get route alternatives and travel times between two locations.
      getTravelTimes: ServiceFunction<
        T,
        {
          // The origin of the route. @example 38.9
          origin: string;
          // The destination of the route. @example -77.04833
          destination: string;
          // The region. Controls which waze server is used.
          region: 'us' | 'na' | 'eu' | 'il' | 'au';
          // Which unit system to use.
          units?: 'metric' | 'imperial';
          // Which vehicle to use.
          vehicle_type?: 'car' | 'taxi' | 'motorcycle';
          // Use real-time or statistical data.
          realtime?: boolean;
          // Whether to avoid toll roads.
          avoid_toll_roads?: boolean;
          // Whether to avoid ferries.
          avoid_ferries?: boolean;
          // Whether to avoid subscription roads.
          avoid_subscription_roads?: boolean;
        }
      >;
    };
    webostv: {
      // Sends a button press command.
      button: ServiceFunction<
        T,
        {
          // Name(s) of the webostv entities where to run the API method.
          entity_id: string;
          // Name of the button to press.  Known possible values are LEFT, RIGHT, DOWN, UP, HOME, MENU, BACK, ENTER, DASH, INFO, ASTERISK, CC, EXIT, MUTE, RED, GREEN, BLUE, YELLOW, VOLUMEUP, VOLUMEDOWN, CHANNELUP, CHANNELDOWN, PLAY, PAUSE, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. @example LEFT
          button: string;
        }
      >;
      // Sends a command.
      command: ServiceFunction<
        T,
        {
          // Name(s) of the webostv entities where to run the API method.
          entity_id: string;
          // Endpoint of the command. @example system.launcher/open
          command: string;
          // An optional payload to provide to the endpoint in the format of key value pair(s). @example target: https://www.google.com
          payload?: object;
        }
      >;
      // Sends the TV the command to change sound output.
      selectSoundOutput: ServiceFunction<
        T,
        {
          // Name(s) of the webostv entities to change sound output on.
          entity_id: string;
          // Name of the sound output to switch to. @example external_speaker
          sound_output: string;
        }
      >;
    };
    mediaPlayer: {
      // Turns on the power of the media player.
      turnOn: ServiceFunction<T, object>;
      // Turns off the power of the media player.
      turnOff: ServiceFunction<T, object>;
      // Toggles a media player on/off.
      toggle: ServiceFunction<T, object>;
      // Turns up the volume.
      volumeUp: ServiceFunction<T, object>;
      // Turns down the volume.
      volumeDown: ServiceFunction<T, object>;
      // Toggles play/pause.
      mediaPlayPause: ServiceFunction<T, object>;
      // Starts playing.
      mediaPlay: ServiceFunction<T, object>;
      // Pauses.
      mediaPause: ServiceFunction<T, object>;
      // Stops playing.
      mediaStop: ServiceFunction<T, object>;
      // Selects the next track.
      mediaNextTrack: ServiceFunction<T, object>;
      // Selects the previous track.
      mediaPreviousTrack: ServiceFunction<T, object>;
      // Clears the playlist.
      clearPlaylist: ServiceFunction<T, object>;
      // Sets the volume level.
      volumeSet: ServiceFunction<
        T,
        {
          // The volume. 0 is inaudible, 1 is the maximum volume.
          volume_level: number;
        }
      >;
      // Mutes or unmutes the media player.
      volumeMute: ServiceFunction<
        T,
        {
          // Defines whether or not it is muted.
          is_volume_muted: boolean;
        }
      >;
      // Allows you to go to a different part of the media that is currently playing.
      mediaSeek: ServiceFunction<
        T,
        {
          // Target position in the currently playing media. The format is platform dependent.
          seek_position: number;
        }
      >;
      // Groups media players together for synchronous playback. Only works on supported multiroom audio systems.
      join: ServiceFunction<
        T,
        {
          // The players which will be synced with the playback specified in `target`. @example - media_player.multiroom_player2 - media_player.multiroom_player3
          group_members: string[];
        }
      >;
      // Sends the media player the command to change input source.
      selectSource: ServiceFunction<
        T,
        {
          // Name of the source to switch to. Platform dependent. @example video1
          source: string;
        }
      >;
      // Selects a specific sound mode.
      selectSoundMode: ServiceFunction<
        T,
        {
          // Name of the sound mode to switch to. @example Music
          sound_mode?: string;
        }
      >;
      // Starts playing specified media.
      playMedia: ServiceFunction<
        T,
        {
          // The ID of the content to play. Platform dependent. @example https://home-assistant.io/images/cast/splash.png
          media_content_id: string | number;
          // The type of the content to play. Such as image, music, tv show, video, episode, channel, or playlist. @example music
          media_content_type: string;
          // If the content should be played now or be added to the queue.
          enqueue?: 'play' | 'next' | 'add' | 'replace';
          // If the media should be played as an announcement. @example true
          announce?: boolean;
        }
      >;
      // Playback mode that selects the media in randomized order.
      shuffleSet: ServiceFunction<
        T,
        {
          // Whether or not shuffle mode is enabled.
          shuffle: boolean;
        }
      >;
      // Removes the player from a group. Only works on platforms which support player groups.
      unjoin: ServiceFunction<T, object>;
      // Playback mode that plays the media in a loop.
      repeatSet: ServiceFunction<
        T,
        {
          // Repeat mode to set.
          repeat: 'off' | 'all' | 'one';
        }
      >;
    };
    remote: {
      // Turns the device off.
      turnOff: ServiceFunction<T, object>;
      // Sends the power on command.
      turnOn: ServiceFunction<
        T,
        {
          // Activity ID or activity name to be started. @example BedroomTV
          activity?: string;
        }
      >;
      // Toggles a device on/off.
      toggle: ServiceFunction<T, object>;
      // Sends a command or a list of commands to a device.
      sendCommand: ServiceFunction<
        T,
        {
          // Device ID to send command to. @example 32756745
          device?: string;
          // A single command or a list of commands to send. @example Play
          command: object;
          // The number of times you want to repeat the commands.
          num_repeats?: number;
          // The time you want to wait in between repeated commands.
          delay_secs?: number;
          // The time you want to have it held before the release is send.
          hold_secs?: number;
        }
      >;
      // Learns a command or a list of commands from a device.
      learnCommand: ServiceFunction<
        T,
        {
          // Device ID to learn command from. @example television
          device?: string;
          // A single command or a list of commands to learn. @example Turn on
          command?: object;
          // The type of command to be learned.
          command_type?: 'ir' | 'rf';
          // If code must be stored as an alternative. This is useful for discrete codes. Discrete codes are used for toggles that only perform one function. For example, a code to only turn a device on. If it is on already, sending the code won't change the state.
          alternative?: boolean;
          // Timeout for the command to be learned.
          timeout?: number;
        }
      >;
      // Deletes a command or a list of commands from the database.
      deleteCommand: ServiceFunction<
        T,
        {
          // Device from which commands will be deleted. @example television
          device?: string;
          // The single command or the list of commands to be deleted. @example Mute
          command: object;
        }
      >;
    };
    weather: {
      // Get weather forecast.
      getForecast: ServiceFunction<
        T,
        {
          // Forecast type: daily, hourly or twice daily.
          type: 'daily' | 'hourly' | 'twice_daily';
        }
      >;
      // Get weather forecasts.
      getForecasts: ServiceFunction<
        T,
        {
          // Forecast type: daily, hourly or twice daily.
          type: 'daily' | 'hourly' | 'twice_daily';
        }
      >;
    };
    deviceTracker: {
      // Records a seen tracked device.
      see: ServiceFunction<
        T,
        {
          // MAC address of the device. @example FF:FF:FF:FF:FF:FF
          mac?: string;
          // ID of the device (find the ID in `known_devices.yaml`). @example phonedave
          dev_id?: string;
          // Hostname of the device. @example Dave
          host_name?: string;
          // Name of the location where the device is located. The options are: `home`, `not_home`, or the name of the zone. @example home
          location_name?: string;
          // GPS coordinates where the device is located, specified by latitude and longitude (for example: [51.513845, -0.100539]). @example [51.509802, -0.086692]
          gps?: object;
          // Accuracy of the GPS coordinates.
          gps_accuracy?: number;
          // Battery level of the device.
          battery?: number;
        }
      >;
    };
    alarmControlPanel: {
      // Disarms the alarm.
      alarmDisarm: ServiceFunction<
        T,
        {
          // Code to disarm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed, but someone is home_.
      alarmArmHome: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed, no one home_.
      alarmArmAway: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed for the night_.
      alarmArmNight: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed for vacation_.
      alarmArmVacation: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Arms the alarm while allowing to bypass a custom area.
      alarmArmCustomBypass: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Enables an external alarm trigger.
      alarmTrigger: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
    };
    button: {
      // Press the button entity.
      press: ServiceFunction<T, object>;
    };
    humidifier: {
      // Turns the humidifier on.
      turnOn: ServiceFunction<T, object>;
      // Turns the humidifier off.
      turnOff: ServiceFunction<T, object>;
      // Toggles the humidifier on/off.
      toggle: ServiceFunction<T, object>;
      // Sets the humidifier operation mode.
      setMode: ServiceFunction<
        T,
        {
          // Operation mode. For example, _normal_, _eco_, or _away_. For a list of possible values, refer to the integration documentation. @example away
          mode: string;
        }
      >;
      // Sets the target humidity.
      setHumidity: ServiceFunction<
        T,
        {
          // Target humidity.
          humidity: number;
        }
      >;
    };
    siren: {
      // Turns the siren on.
      turnOn: ServiceFunction<
        T,
        {
          // The tone to emit. When `available_tones` property is a map, either the key or the value can be used. Must be supported by the integration. @example fire
          tone?: string;
          // The volume. 0 is inaudible, 1 is the maximum volume. Must be supported by the integration. @example 0.5
          volume_level?: number;
          // Number of seconds the sound is played. Must be supported by the integration. @example 15
          duration?: string;
        }
      >;
      // Turns the siren off.
      turnOff: ServiceFunction<T, object>;
      // Toggles the siren on/off.
      toggle: ServiceFunction<T, object>;
    };
    vacuum: {
      // Starts or resumes the cleaning task.
      start: ServiceFunction<T, object>;
      // Pauses the cleaning task.
      pause: ServiceFunction<T, object>;
      // Tells the vacuum cleaner to return to its dock.
      returnToBase: ServiceFunction<T, object>;
      // Tells the vacuum cleaner to do a spot clean-up.
      cleanSpot: ServiceFunction<T, object>;
      // Locates the vacuum cleaner robot.
      locate: ServiceFunction<T, object>;
      // Stops the current cleaning task.
      stop: ServiceFunction<T, object>;
      // Sets the fan speed of the vacuum cleaner.
      setFanSpeed: ServiceFunction<
        T,
        {
          // Fan speed. The value depends on the integration. Some integrations have speed steps, like 'medium'. Some use a percentage, between 0 and 100. @example low
          fan_speed: string;
        }
      >;
      // Sends a command to the vacuum cleaner.
      sendCommand: ServiceFunction<
        T,
        {
          // Command to execute. The commands are integration-specific. @example set_dnd_timer
          command: string;
          // Parameters for the command. The parameters are integration-specific. @example { 'key': 'value' }
          params?: object;
        }
      >;
    };
    mqtt: {
      // Publishes a message to an MQTT topic.
      publish: ServiceFunction<
        T,
        {
          // Topic to publish to. @example /homeassistant/hello
          topic: string;
          // The payload to publish. @example This is great
          payload?: string;
          // Template to render as a payload value. If a payload is provided, the template is ignored. @example {{ states('sensor.temperature') }}
          payload_template?: object;
          // Quality of Service to use. 0: At most once. 1: At least once. 2: Exactly once.
          qos?: '0' | '1' | '2';
          // If the message should have the retain flag set. If set, the broker stores the most recent message on a topic.
          retain?: boolean;
        }
      >;
      // Writes all messages on a specific topic into the `mqtt_dump.txt` file in your configuration folder.
      dump: ServiceFunction<
        T,
        {
          // Topic to listen to. @example OpenZWave/#
          topic?: string;
          // How long we should listen for messages in seconds.
          duration?: number;
        }
      >;
      // Reloads MQTT entities from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    update: {
      // Installs an update for this device or service.
      install: ServiceFunction<
        T,
        {
          // The version to install. If omitted, the latest version will be installed. @example 1.0.0
          version?: string;
          // If supported by the integration, this creates a backup before starting the update .
          backup?: boolean;
        }
      >;
      // Marks currently available update as skipped.
      skip: ServiceFunction<T, object>;
      // Removes the skipped version marker from an update.
      clearSkipped: ServiceFunction<T, object>;
    };
    sonos: {
      // Takes a snapshot of the media player.
      snapshot: ServiceFunction<
        T,
        {
          // Name of entity that will be snapshot.
          entity_id?: string;
          // True or False. Also snapshot the group layout.
          with_group?: boolean;
        }
      >;
      // Restores a snapshot of the media player.
      restore: ServiceFunction<
        T,
        {
          // Name of entity that will be restored.
          entity_id?: string;
          // True or False. Also restore the group layout.
          with_group?: boolean;
        }
      >;
      // Sets a Sonos timer.
      setSleepTimer: ServiceFunction<
        T,
        {
          // Number of seconds to set the timer.
          sleep_time?: number;
        }
      >;
      // Clears a Sonos timer.
      clearSleepTimer: ServiceFunction<T, object>;
      // Updates an alarm with new time and volume settings.
      updateAlarm: ServiceFunction<
        T,
        {
          // ID for the alarm to be updated.
          alarm_id: number;
          // Set time for the alarm. @example 07:00
          time?: object;
          // Set alarm volume level.
          volume?: number;
          // Enable or disable the alarm.
          enabled?: boolean;
          // Enable or disable including grouped rooms.
          include_linked_zones?: boolean;
        }
      >;
      // Start playing the queue from the first item.
      playQueue: ServiceFunction<
        T,
        {
          // Position of the song in the queue to start playing from.
          queue_position?: number;
        }
      >;
      // Removes an item from the queue.
      removeFromQueue: ServiceFunction<
        T,
        {
          // Position in the queue to remove.
          queue_position?: number;
        }
      >;
    };
    hue: {
      // Activates a Hue scene with more control over the options.
      activateScene: ServiceFunction<
        T,
        {
          // Transition duration it takes to bring devices to the state defined in the scene.
          transition?: number;
          // Enable dynamic mode of the scene.
          dynamic?: boolean;
          // Speed of dynamic palette for this scene.
          speed?: number;
          // Set brightness for the scene.
          brightness?: number;
        }
      >;
      // Activates a hue scene stored in the hue hub.
      hueActivateScene: ServiceFunction<
        T,
        {
          // Name of hue group/room from the hue app. @example Living Room
          group_name?: string;
          // Name of hue scene from the hue app. @example Energize
          scene_name?: string;
          // Enable dynamic mode of the scene (V2 bridges and supported scenes only).
          dynamic?: boolean;
        }
      >;
    };
    time: {
      // Sets the time.
      setValue: ServiceFunction<
        T,
        {
          // The time to set. @example 22:15
          time: object;
        }
      >;
    };
    roborock: {
      // Get the map and room information of your device.
      getMaps: ServiceFunction<T, object>;
    };
    powercalc: {
      // Batch change configuration of all Powercalc config entries
      changeGuiConfig: ServiceFunction<
        T,
        {
          // The field you'd like to change
          field: 'create_energy_sensor' | 'create_utility_meters' | 'ignore_unavailable_state' | 'energy_integration_method';
          // The value to set.
          value: string;
        }
      >;
      // Reset an energy sensor to zero kWh.
      resetEnergy: ServiceFunction<T, object>;
      // Calibrates a utility meter sensor.
      calibrateUtilityMeter: ServiceFunction<
        T,
        {
          // The value to set. @example 100
          value: string;
        }
      >;
      // Sets the energy sensor to a given kWh value.
      calibrateEnergy: ServiceFunction<
        T,
        {
          // The value to set. @example 100
          value: string;
        }
      >;
      // Increases the sensor with a given amount.
      increaseDailyEnergy: ServiceFunction<
        T,
        {
          // Amount to add to the sensor. @example 100
          value: string;
        }
      >;
      // Start execution of a playbook.
      activatePlaybook: ServiceFunction<
        T,
        {
          // Playbook identifier. @example program1
          playbook_id: string;
        }
      >;
      // Stop currently active playbook.
      stopPlaybook: ServiceFunction<T, object>;
      // Get current running playbook
      getActivePlaybook: ServiceFunction<T, object>;
      // Some profiles in the library has different sub profiles. This service allows you to switch to another one.
      switchSubProfile: ServiceFunction<
        T,
        {
          // Define one of the possible sub profiles @example nigh_vision
          profile: string;
        }
      >;
    };
    google: {
      // Adds a new calendar event.
      addEvent: ServiceFunction<
        T,
        {
          // The id of the calendar you want. @example Your email
          calendar_id: string;
          // Acts as the title of the event. @example Bowling
          summary: string;
          // The description of the event. Optional. @example Birthday bowling
          description?: string;
          // The date and time the event should start. @example 2019-03-22 20:00:00
          start_date_time?: string;
          // The date and time the event should end. @example 2019-03-22 22:00:00
          end_date_time?: string;
          // The date the whole day event should start. @example 2019-03-10
          start_date?: string;
          // The date the whole day event should end. @example 2019-03-11
          end_date?: string;
          // Days or weeks that you want to create the event in. @example 'days': 2 or 'weeks': 2
          in?: object;
        }
      >;
      // Add a new calendar event.
      createEvent: ServiceFunction<
        T,
        {
          // Acts as the title of the event. @example Bowling
          summary: string;
          // The description of the event. Optional. @example Birthday bowling
          description?: string;
          // The date and time the event should start. @example 2022-03-22 20:00:00
          start_date_time?: string;
          // The date and time the event should end. @example 2022-03-22 22:00:00
          end_date_time?: string;
          // The date the whole day event should start. @example 2022-03-10
          start_date?: string;
          // The date the whole day event should end. @example 2022-03-11
          end_date?: string;
          // Days or weeks that you want to create the event in. @example 'days': 2 or 'weeks': 2
          in?: object;
          // The location of the event. Optional. @example Conference Room - F123, Bldg. 002
          location?: string;
        }
      >;
    };
    alarmo: {
      // Arm an Alarmo entity with custom settings.
      arm: ServiceFunction<
        T,
        {
          // Alarm entity that should be armed. @example alarm_control_panel.alarm
          entity_id: string;
          // Code to use for the arming. @example 1234
          code?: string;
          // Mode to arm the alarm in. @example away
          mode?: 'away' | 'night' | 'home' | 'vacation' | 'custom';
          // Skip the exit delay.
          skip_delay?: boolean;
          // Automatically bypass all sensors that prevent the arming operation.
          force?: boolean;
        }
      >;
      // Disarm an Alarmo entity.
      disarm: ServiceFunction<
        T,
        {
          // Alarm entity that should be disarmed. @example alarm_control_panel.alarm
          entity_id: string;
          // Code to use for the disarming. @example 1234
          code?: string;
        }
      >;
      // Allow a user to arm/disarm alarmo.
      enableUser: ServiceFunction<
        T,
        {
          // Name of the user to enable. @example Frank
          name: string;
        }
      >;
      // Block a user from arming/disarming alarmo.
      disableUser: ServiceFunction<
        T,
        {
          // Name of the user to disable. @example Frank
          name: string;
        }
      >;
    };
    calendar: {
      // Adds a new calendar event.
      createEvent: ServiceFunction<
        T,
        {
          // Defines the short summary or subject for the event. @example Department Party
          summary: string;
          // A more complete description of the event than the one provided by the summary. @example Meeting to provide technical review for 'Phoenix' design.
          description?: string;
          // The date and time the event should start. @example 2022-03-22 20:00:00
          start_date_time?: object;
          // The date and time the event should end. @example 2022-03-22 22:00:00
          end_date_time?: object;
          // The date the all-day event should start. @example 2022-03-22
          start_date?: object;
          // The date the all-day event should end (exclusive). @example 2022-03-23
          end_date?: object;
          // Days or weeks that you want to create the event in. @example {'days': 2} or {'weeks': 2}
          in?: object;
          // The location of the event. @example Conference Room - F123, Bldg. 002
          location?: string;
        }
      >;
      // Lists events on a calendar within a time range.
      listEvents: ServiceFunction<
        T,
        {
          // Returns active events after this time (exclusive). When not set, defaults to now. @example 2022-03-22 20:00:00
          start_date_time?: object;
          // Returns active events before this time (exclusive). Cannot be used with 'duration'. @example 2022-03-22 22:00:00
          end_date_time?: object;
          // Returns active events from start_date_time until the specified duration.
          duration?: object;
        }
      >;
      // Get events on a calendar within a time range.
      getEvents: ServiceFunction<
        T,
        {
          // Returns active events after this time (exclusive). When not set, defaults to now. @example 2022-03-22 20:00:00
          start_date_time?: object;
          // Returns active events before this time (exclusive). Cannot be used with 'duration'. @example 2022-03-22 22:00:00
          end_date_time?: object;
          // Returns active events from start_date_time until the specified duration.
          duration?: object;
        }
      >;
    };
    blueprint: {
      // Import a blueprint.
      import: ServiceFunction<
        T,
        {
          // The URL to import the blueprint from.
          url: string;
        }
      >;
    };
    repairs: {
      // Manually create and raise a issue in Home Assistant repairs.
      create: ServiceFunction<
        T,
        {
          // The title of the issue.
          title: string;
          // The description of the issue. Supports Markdown.
          description: string;
          // The issue can have an identifier, which allows you to cancel it later with that ID if needed. It also prevent duplicate issues to be created. If not provided, a random ID will be generated.
          issue_id?: string;
          // This field can be used to set the domain of the issue. For example, by default (if not set), it will use 'spook'. This causes Spook to be shown in the logo/image of the issue. If you set it to 'homeassistant', the Home Assistant logo will be used, or use 'hue', 'zwave_js', 'mqtt', etc. to use the logo of that integration.
          domain?: string;
          // The severity of the issue. This will be used to determine the priority of the issue. If not set, 'warning' will be used
          severity?: 'warning' | 'error' | 'critical';
          // If the issue should be persistent, which means it will survive restarts of Home Assistant. By default, issues are not persistent.
          persistent?: boolean;
        }
      >;
      // Ignore all issues currently raised in Home Assistant Repairs.
      ignoreAll: ServiceFunction<T, object>;
      // Removes a manually created Home Assistant repairs issue. This service can only remove issues created with the `repairs_create` service.
      remove: ServiceFunction<
        T,
        {
          // The issue ID to remove.
          issue_id: string;
        }
      >;
      // Unignore all issues currently raised in Home Assistant Repairs.
      unignoreAll: ServiceFunction<T, object>;
    };
    spook: {
      // A call to this service will randomly fail.
      randomFail: ServiceFunction<T, object>;
      // Calling this service spooks Home Assistant. The service call will always fail.
      boo: ServiceFunction<T, object>;
    };
    script: {
      //
      slukAlleLamper: ServiceFunction<T, object>;
      //
      notifcerOmAbneEnheder: ServiceFunction<T, object>;
      //
      slukAlleTv: ServiceFunction<T, object>;
      //
      1657997222440: ServiceFunction<T, object>;
      //
      alarmTrigger: ServiceFunction<T, object>;
      //
      alarmStopTrigger: ServiceFunction<T, object>;
      //
      notifyAboutTeslaTrip: ServiceFunction<T, object>;
      //
      abenGardinerNogleErHjemme: ServiceFunction<T, object>;
      //
      ingenHjemmeSkalSprinklerStarte: ServiceFunction<T, object>;
      //
      notificerOmFrokost: ServiceFunction<T, object>;
      //
      visQrPaFladskarm: ServiceFunction<T, object>;
      //
      slaStovsugningFra: ServiceFunction<T, object>;
      //
      togglestovsuger: ServiceFunction<T, object>;
      //
      1698258306760: ServiceFunction<T, object>;
      //
      1699994153775: ServiceFunction<T, object>;
      //
      lavbilligstromevents: ServiceFunction<T, object>;
      //
      v2SetGarbageGenericDatesForNext24HoursDupliker: ServiceFunction<T, object>;
      // Reloads all the available scripts.
      reload: ServiceFunction<T, object>;
      // Runs the sequence of actions defined in a script.
      turnOn: ServiceFunction<T, object>;
      // Stops a running script.
      turnOff: ServiceFunction<T, object>;
      // Toggle a script. Starts it, if isn't running, stops it otherwise.
      toggle: ServiceFunction<T, object>;
    };
    automation: {
      // Triggers the actions of an automation.
      trigger: ServiceFunction<
        T,
        {
          // Defines whether or not the conditions will be skipped.
          skip_condition?: boolean;
        }
      >;
      // Toggles (enable / disable) an automation.
      toggle: ServiceFunction<T, object>;
      // Enables an automation.
      turnOn: ServiceFunction<T, object>;
      // Disables an automation.
      turnOff: ServiceFunction<
        T,
        {
          // Stops currently running actions.
          stop_actions?: boolean;
        }
      >;
      // Reloads the automation configuration.
      reload: ServiceFunction<T, object>;
    };
    teslaCustom: {
      // Run an API command using controller.api
      api: ServiceFunction<
        T,
        {
          // Email address (optional if only one account) @example elon@tesla.com
          email?: string;
          // Command to run. See https://github.com/zabuldon/teslajsonpy/blob/master/teslajsonpy/endpoints.json @example WAKE_UP
          command: string;
          // Parameters in a dictionary. `path_vars` replace variables in endpoints.json path. All others are passed directly to controller.api. For command parameters see https://tesla-api.timdorr.com/vehicle/commands. @example {'path_vars': {'vehicle_id':'1'}, 'wake_if_asleep':True}
          parameters: object;
        }
      >;
      // Set the polling interval for the Tesla API
      pollingInterval: ServiceFunction<
        T,
        {
          // Email address (optional if only one account) @example elon@tesla.com
          email?: string;
          // Vehicle VIN (if not provided then default polling interval will be updated) @example 5YJSA11111111111
          vin?: string;
          // Number of seconds between each poll.  See https://github.com/alandtse/tesla/wiki/Polling-policy more information. @example 660
          scan_interval: number;
        }
      >;
    };
    text: {
      // Sets the value.
      setValue: ServiceFunction<
        T,
        {
          // Enter your text. @example Hello world!
          value: string;
        }
      >;
    };
  }
  export interface CustomEntityNameContainer {
    names:
      | 'person.mikkel_birch'
      | 'person.henriette'
      | 'binary_sensor.remote_ui'
      | 'stt.home_assistant_cloud'
      | 'tts.home_assistant_cloud'
      | 'scene.sluk_alt'
      | 'scene.musik_i_stue'
      | 'scene.musik_pa_badevaerelse'
      | 'scene.musik_i_kokken'
      | 'scene.musik_pa_kontoret'
      | 'binary_sensor.alarmsensors'
      | 'binary_sensor.vinduer'
      | 'light.standerlampe'
      | 'switch.sonos_night_sound'
      | 'cover.stue_gardiner'
      | 'light.lysgrupper'
      | 'light.kontor_acc'
      | 'light.sovevaerelse_acc'
      | 'input_number.additional_costs_pr_kwh'
      | 'input_number.percentage_above_electric_price_average'
      | 'input_number.priceprkm'
      | 'input_number.priceprkwh'
      | 'zone.klima'
      | 'zone.garage'
      | 'input_boolean.forcecharge'
      | 'input_boolean.awayfromhome'
      | 'input_boolean.dererpost'
      | 'input_boolean.energidrikikoleskabet'
      | 'input_boolean.frokostbeskedsendtidag'
      | 'input_boolean.mastovsuge'
      | 'input_boolean.stearinlys'
      | 'input_boolean.kontorhentvand'
      | 'timer.badevaerelsevinduelukkesom'
      | 'timer.handklaedevarmerslukkesom'
      | 'timer.sovevaerelseslysslukkerom'
      | 'timer.forceoplad'
      | 'zone.home'
      | 'sensor.nordpool_monthly_statistics'
      | 'sensor.nordpool_weekly_statistics'
      | 'sensor.energy_prices_monthly_statistics'
      | 'sensor.energy_prices_two_weekly_statistics'
      | 'sensor.energy_prices_weekly_statistics'
      | 'conversation.home_assistant'
      | 'sensor.frokost_torsdag'
      | 'sensor.frokost_tirsdag'
      | 'sensor.frokost_fredag'
      | 'sensor.frokost_onsdag'
      | 'sensor.frokost_mandag'
      | 'fan.ventilator'
      | 'light.ventilatorlys'
      | 'input_text.critical_notification'
      | 'input_text.time_sensitive_notification'
      | 'input_text.regular_notification'
      | 'input_text.playliste'
      | 'input_text.lukgardinerkl'
      | 'input_text.naesteeventikalender'
      | 'input_text.affald_generic_date'
      | 'input_text.affald_generic_title'
      | 'sun.sun'
      | 'sensor.sun_next_dawn'
      | 'sensor.sun_next_dusk'
      | 'sensor.sun_next_midnight'
      | 'sensor.sun_next_noon'
      | 'sensor.sun_next_rising'
      | 'sensor.sun_next_setting'
      | 'switch.adaptive_lighting_sleep_mode_adaptiv'
      | 'switch.adaptive_lighting_adapt_color_adaptiv'
      | 'switch.adaptive_lighting_adapt_brightness_adaptiv'
      | 'switch.adaptive_lighting_adaptiv'
      | 'switch.adaptive_lighting_sleep_mode_ikea'
      | 'switch.adaptive_lighting_adapt_color_ikea'
      | 'switch.adaptive_lighting_adapt_brightness_ikea'
      | 'switch.adaptive_lighting_ikea'
      | 'counter.koleskababnetantal'
      | 'camera.webcam_trafikken_dk'
      | 'binary_sensor.houseissleeping'
      | 'binary_sensor.ishome'
      | 'binary_sensor.robotshouldbeinside'
      | 'sensor.billig_strom_tid_array'
      | 'sensor.procent_af_max_energy_pris'
      | 'sensor.billigstrommaxgraense'
      | 'binary_sensor.billigstromnu'
      | 'sensor.energypriceaveragewithforecast'
      | 'sensor.cheappricesdates'
      | 'sensor.billigstromimorgentimestamps'
      | 'sensor.billigstromimorgenprices'
      | 'binary_sensor.someoneisintheshower'
      | 'sensor.percent_of_max_energi_price'
      | 'sensor.monthly_energy_price_average_with_adjustment'
      | 'binary_sensor.billigtstrom'
      | 'sensor.saveeye_watt'
      | 'lock.aqara_smart_lock_u200'
      | 'sensor.co2_signal_co2_intensity'
      | 'sensor.co2_signal_grid_fossil_fuel_percentage'
      | 'sensor.waze_travel_time_2'
      | 'media_player.cc_sovevaerelset_2'
      | 'remote.cc_sovevaerelset'
      | 'media_player.cc_stuen_2'
      | 'remote.cc_stuen'
      | 'binary_sensor.docker_hub_update_available'
      | 'sensor.docker_hub'
      | 'sensor.local_ip'
      | 'sensor.uptime'
      | 'weather.astervej'
      | 'cover.garageport'
      | 'sensor.garageport_battery'
      | 'sensor.garageport_temperature'
      | 'binary_sensor.ipad_focus'
      | 'device_tracker.ipad'
      | 'sensor.ipad_activity'
      | 'sensor.ipad_battery_level'
      | 'sensor.ipad_battery_state'
      | 'sensor.ipad_storage'
      | 'sensor.ipad_ssid'
      | 'sensor.ipad_bssid'
      | 'sensor.ipad_connection_type'
      | 'sensor.ipad_last_update_trigger'
      | 'sensor.ipad_geocoded_location'
      | 'binary_sensor.henriettes_iphone_focus'
      | 'device_tracker.henriettes_iphone'
      | 'sensor.henriettes_iphone_distance'
      | 'sensor.henriettes_iphone_steps'
      | 'sensor.henriettes_iphone_ssid'
      | 'sensor.henriettes_iphone_floors_descended'
      | 'sensor.henriettes_iphone_activity'
      | 'sensor.henriettes_iphone_floors_ascended'
      | 'sensor.henriettes_iphone_battery_level'
      | 'sensor.henriettes_iphone_connection_type'
      | 'sensor.henriettes_iphone_average_active_pace'
      | 'sensor.henriettes_iphone_bssid'
      | 'sensor.henriettes_iphone_battery_state'
      | 'sensor.henriettes_iphone_sim_2'
      | 'sensor.henriettes_iphone_storage'
      | 'sensor.henriettes_iphone_geocoded_location'
      | 'sensor.henriettes_iphone_sim_1'
      | 'sensor.henriettes_iphone_last_update_trigger'
      | 'binary_sensor.ipad_focus_2'
      | 'device_tracker.ipad2'
      | 'sensor.ipad_activity_2'
      | 'sensor.ipad_battery_level_2'
      | 'sensor.ipad_battery_state_2'
      | 'sensor.ipad_storage_2'
      | 'sensor.ipad_ssid_2'
      | 'sensor.ipad_bssid_2'
      | 'sensor.ipad_connection_type_2'
      | 'sensor.ipad_geocoded_location_2'
      | 'sensor.ipad_last_update_trigger_2'
      | 'binary_sensor.iphone_3_focus'
      | 'device_tracker.iphone_3'
      | 'sensor.iphone_3_distance'
      | 'sensor.iphone_3_activity'
      | 'sensor.iphone_3_average_active_pace'
      | 'sensor.iphone_3_floors_descended'
      | 'sensor.iphone_3_floors_ascended'
      | 'sensor.iphone_3_steps'
      | 'sensor.iphone_3_battery_level'
      | 'sensor.iphone_3_storage'
      | 'sensor.iphone_3_ssid'
      | 'sensor.iphone_3_battery_state'
      | 'sensor.iphone_3_connection_type'
      | 'sensor.iphone_3_sim_2'
      | 'sensor.iphone_3_sim_1'
      | 'sensor.iphone_3_bssid'
      | 'sensor.iphone_3_last_update_trigger'
      | 'sensor.iphone_3_geocoded_location'
      | 'sensor.saveeye_total_watt_hours_cost'
      | 'sensor.bmt_energy_added_cost'
      | 'scene.christmas_previousday'
      | 'scene.christmas_nextday'
      | 'scene.turn_off_candles'
      | 'scene.turn_on_candles'
      | 'sensor.drivenkms'
      | 'sensor.nighthawkchargecost'
      | 'sensor.nighthawkchargedkwh'
      | 'sensor.forsyningsaveeye'
      | 'sensor.totalkwhconsumedtoday'
      | 'sensor.totalpowercosttoday'
      | 'sensor.totalkwhused'
      | 'sensor.totalkwhusedtoday'
      | 'sensor.saveeye_total_watt_hours'
      | 'sensor.saveeye_total_kilowatt_hours'
      | 'sensor.saveeye_latestinterval'
      | 'sensor.saveeye_currentconsumptionwatt'
      | 'switch.presence_simulation'
      | 'sensor.postkasse_offentlig_temperature'
      | 'sensor.postkasse_offentlig_battery'
      | 'sensor.postkasse_offentlig_x_axis'
      | 'sensor.postkasse_offentlig_y_axis'
      | 'sensor.postkasse_offentlig_z_axis'
      | 'sensor.fastforward_do_not_disturb_until'
      | 'sensor.koleskab_knap_battery'
      | 'sensor.kokken_knap_action'
      | 'sensor.sofa_gardin_battery'
      | 'sensor.sofa_gardin_device_temperature'
      | 'sensor.sofa_gardin_motor_state'
      | 'sensor.sovevaerelse_vindue_temperature'
      | 'sensor.sovevaerelse_vindue_battery'
      | 'sensor.sovevaerelse_vindue_x_axis'
      | 'sensor.sovevaerelse_vindue_y_axis'
      | 'sensor.sovevaerelse_vindue_z_axis'
      | 'sensor.sirene_battery'
      | 'sensor.spisebord_hojre_gardin_battery'
      | 'sensor.spisebord_venstre_gardin_battery'
      | 'sensor.0x54ef44100050fce9_power'
      | 'sensor.0x54ef44100050fce9_energy'
      | 'sensor.0x54ef44100050fce9_device_temperature'
      | 'sensor.bibliotek_knap_action'
      | 'sensor.bibliotek_knap_battery'
      | 'sensor.bibliotek_knap_temperature'
      | 'sensor.bibliotek_knap_click'
      | 'sensor.henriettes_knap_action'
      | 'sensor.henriettes_knap_battery_2'
      | 'sensor.henriettes_knap_temperature'
      | 'sensor.henriettes_knap_click'
      | 'sensor.terrasse_dor_temperature'
      | 'sensor.terrasse_dor_battery'
      | 'sensor.terrasse_dor_x_axis'
      | 'sensor.terrasse_dor_y_axis'
      | 'sensor.terrasse_dor_z_axis'
      | 'sensor.hoveddor_sensor_battery'
      | 'sensor.hoveddor_sensor_device_temperature'
      | 'sensor.hoveddor_sensor_power_outage_count'
      | 'sensor.kontor_hojre_sensor_temperature'
      | 'sensor.kontor_hojre_sensor_battery'
      | 'sensor.kontor_hojre_sensor_x_axis'
      | 'sensor.kontor_hojre_sensor_y_axis'
      | 'sensor.kontor_hojre_sensor_z_axis'
      | 'sensor.toilet_vindue_sensor_temperature'
      | 'sensor.toilet_vindue_sensor_battery'
      | 'sensor.toilet_vindue_sensor_x_axis'
      | 'sensor.toilet_vindue_sensor_y_axis'
      | 'sensor.toilet_vindue_sensor_z_axis'
      | 'sensor.under_vasken_sensor_temperature'
      | 'sensor.under_vasken_sensor_battery'
      | 'sensor.sovevaerelse_knap_battery_2'
      | 'sensor.sovevaerelse_knap_action'
      | 'sensor.sovevaerelse_knap_click'
      | 'sensor.sovevaerelse_tv_power'
      | 'sensor.kontor_gardin_battery'
      | 'sensor.bryggers_dor_sensor_temperature'
      | 'sensor.bryggers_dor_sensor_battery'
      | 'sensor.bryggers_dor_sensor_x_axis'
      | 'sensor.bryggers_dor_sensor_y_axis'
      | 'sensor.bryggers_dor_sensor_z_axis'
      | 'sensor.0x54ef4410004a4bad_battery'
      | 'sensor.0x54ef4410004a4bad_device_temperature'
      | 'sensor.0x54ef4410004a4bad_motor_state'
      | 'sensor.vaerksted_dor_temperature'
      | 'sensor.vaerksted_dor_battery'
      | 'sensor.vaerksted_dor_x_axis'
      | 'sensor.vaerksted_dor_y_axis'
      | 'sensor.vaerksted_dor_z_axis'
      | 'sensor.energydrikknap_battery'
      | 'sensor.energydrikknap_action'
      | 'sensor.energydrikknap_click'
      | 'sensor.koleskab_lage_temperature'
      | 'sensor.koleskab_lage_battery'
      | 'sensor.koleskab_lage_x_axis'
      | 'sensor.koleskab_lage_y_axis'
      | 'sensor.koleskab_lage_z_axis'
      | 'sensor.walkin_knap_action'
      | 'sensor.walkin_knap_battery'
      | 'sensor.walkin_knap_temperature'
      | 'sensor.walkin_knap_click'
      | 'sensor.vandhane_battery'
      | 'sensor.entre_knap_battery'
      | 'sensor.entre_knap_action'
      | 'sensor.entre_knap_click'
      | 'sensor.sovevaerelse_radiator_kontakt_power'
      | 'sensor.sovevaerelse_radiator_kontakt_energy'
      | 'sensor.sovevaerelse_radiator_kontakt_device_temperature'
      | 'sensor.stue_luftrenser_fan_speed'
      | 'sensor.stue_luftrenser_pm25'
      | 'sensor.stue_luftrenser_air_quality'
      | 'sensor.stue_luftrenser_filter_age'
      | 'sensor.badevaerelsefugtighed_battery'
      | 'sensor.badevaerelsefugtighed_temperature'
      | 'sensor.badevaerelsefugtighed_humidity'
      | 'sensor.badevaerelsefugtighed_pressure'
      | 'sensor.opvaskemaskinevibrationer_battery'
      | 'sensor.opvaskemaskinevibrationer_device_temperature'
      | 'sensor.opvaskemaskinevibrationer_action'
      | 'sensor.opvaskemaskinevibrationer_strength'
      | 'sensor.opvaskemaskinevibrationer_angle_x'
      | 'sensor.opvaskemaskinevibrationer_angle_y'
      | 'sensor.opvaskemaskinevibrationer_angle_z'
      | 'sensor.opvaskemaskinevibrationer_power_outage_count'
      | 'sensor.opvaskemaskinevibrationer_x_axis'
      | 'sensor.opvaskemaskinevibrationer_y_axis'
      | 'sensor.opvaskemaskinevibrationer_z_axis'
      | 'sensor.stue_knap_action'
      | 'sensor.stue_knap_battery'
      | 'sensor.stue_knap_temperature'
      | 'sensor.stue_knap_click'
      | 'sensor.zigbee2mqtt_bridge_version'
      | 'sensor.zigbee2mqtt_bridge_permit_join_timeout'
      | 'sensor.0x048727fffe9d7da6_battery'
      | 'sensor.0x048727fffe9d7cb5_battery'
      | 'binary_sensor.postkasse_offentlig_contact'
      | 'binary_sensor.postkasse_offentlig_battery_low'
      | 'binary_sensor.postkasse_offentlig_tamper'
      | 'binary_sensor.postkasse_offentlig_moving'
      | 'binary_sensor.kokken_knap_update_available'
      | 'binary_sensor.sofa_gardin_charging_status'
      | 'binary_sensor.sofa_gardin_running'
      | 'binary_sensor.sofa_gardin_update_available'
      | 'binary_sensor.sovevaerelse_vindue_contact'
      | 'binary_sensor.sovevaerelse_vindue_battery_low'
      | 'binary_sensor.sovevaerelse_vindue_tamper'
      | 'binary_sensor.sovevaerelse_vindue_moving'
      | 'binary_sensor.sirene_alarm'
      | 'binary_sensor.sirene_ac_connected'
      | 'binary_sensor.spisebord_hojre_gardin_update_available'
      | 'binary_sensor.kontor_sensor_motion'
      | 'binary_sensor.hue_motion_sensor_1_motion'
      | 'binary_sensor.trappe_sensor_motion'
      | 'binary_sensor.stuen_entertainment_configuration'
      | 'light.hue_resonate_outdoor_wall_1'
      | 'light.spot_f2'
      | 'light.spot_7'
      | 'light.spot_1'
      | 'light.bag_fjernsyn'
      | 'light.color_temperature_light_2'
      | 'light.standerlampen_1'
      | 'light.hojre_side'
      | 'light.hue_play_2'
      | 'light.color_temperature_light_1_3'
      | 'light.spot_3'
      | 'light.spot_6'
      | 'light.loft'
      | 'light.spot_2_2'
      | 'light.hue_color_lamp_1'
      | 'light.color_temperature_light_1_2'
      | 'light.hue_lightstrip_plus_1_2'
      | 'light.spot1'
      | 'light.spot_2'
      | 'light.gelaender'
      | 'light.spot_f3'
      | 'light.dimmable_light_3'
      | 'light.venstre'
      | 'light.spot_f3_2'
      | 'light.spot_3_2'
      | 'light.spisebord_1'
      | 'light.hue_lightstrip_plus_1'
      | 'light.hue_play_1'
      | 'light.hue_white_luster_1'
      | 'light.dimmable_light_1_2'
      | 'light.hue_white_lamp_1'
      | 'light.spisebord_2'
      | 'light.standerlampen_2'
      | 'light.dimmable_light_2'
      | 'light.hue_resonate_outdoor_wall_1_2'
      | 'light.spot_f1'
      | 'light.venstre_side'
      | 'light.spot_4'
      | 'light.spot_5'
      | 'light.walk_in'
      | 'light.kokken'
      | 'light.spisestue'
      | 'light.bibliotek'
      | 'light.forhave'
      | 'scene.spisestue_slap_af'
      | 'scene.stue_solnedgang_pa_savannen'
      | 'scene.kontor_slap_af'
      | 'scene.repoet_daempet'
      | 'scene.forhave_klar'
      | 'scene.sovevaerelse_laes'
      | 'scene.kontor_klar'
      | 'scene.entre_slap_af_2'
      | 'scene.kokken_laes'
      | 'scene.repoet_klar'
      | 'scene.kontor_laes'
      | 'scene.kontor_koncentrer_dig'
      | 'scene.kokken_slap_af'
      | 'scene.stue_fa_ny_energi'
      | 'scene.spisestue_laes'
      | 'scene.stue_laes'
      | 'scene.kokken_fa_ny_energi'
      | 'scene.kontor_daempet'
      | 'scene.entre_dimmed'
      | 'scene.kokken_natlys'
      | 'scene.forhave_danmark'
      | 'scene.stue_agf'
      | 'scene.entre_laes'
      | 'scene.sovevaerelse_slap_af_2'
      | 'scene.sovevaerelse_natlys'
      | 'scene.repoet_natlys'
      | 'scene.kokken_slap_af_2'
      | 'scene.entre_bright'
      | 'scene.forhave_agf'
      | 'scene.entre_slap_af'
      | 'scene.forhave_ukraine'
      | 'scene.entre_koncentrer_dig'
      | 'scene.sovevaerelse_fa_ny_energi'
      | 'scene.stue_koncentrer_dig'
      | 'scene.spisestue_natlys'
      | 'scene.kontor_natlys'
      | 'scene.kontor_slap_af_2'
      | 'scene.stue_slap_af'
      | 'scene.forhave_farveeksplosion'
      | 'scene.spisestue_koncentrer_dig'
      | 'scene.spisestue_fa_ny_energi'
      | 'scene.stue_natlys'
      | 'scene.sovevaerelse_koncentrer_dig'
      | 'scene.kontor_cancun'
      | 'scene.stue_irish'
      | 'scene.kokken_daempet'
      | 'scene.entre_fa_ny_energi'
      | 'scene.kokken_klar'
      | 'scene.stue_slap_af_2'
      | 'scene.sovevaerelse_slap_af'
      | 'scene.entre_natlys'
      | 'scene.stue_biograf'
      | 'scene.forhave_jul'
      | 'scene.kokken_koncentrer_dig'
      | 'scene.kontor_fa_ny_energi'
      | 'scene.spisestue_slap_af_2'
      | 'scene.spisestue_naturligt_lys'
      | 'scene.sovevaerelse_naturligt_lys'
      | 'scene.kontor_naturligt_lys'
      | 'scene.entre_naturligt_lys'
      | 'scene.stue_naturligt_lys'
      | 'scene.kokken_naturligt_lys'
      | 'sensor.hue_motion_sensor_1_temperature'
      | 'sensor.trappe_sensor_temperature'
      | 'sensor.kontor_sensor_temperature'
      | 'sensor.hue_motion_sensor_1_illuminance'
      | 'sensor.kontor_sensor_light_level'
      | 'sensor.trappe_sensor_light_level'
      | 'sensor.kontor_sensor_battery'
      | 'sensor.trappe_sensor_battery'
      | 'sensor.hue_motion_sensor_1_battery'
      | 'switch.kontor_sensor_motion'
      | 'switch.hue_motion_sensor_1_motion'
      | 'switch.trappe_sensor_motion'
      | 'switch.hue_motion_sensor_1_illuminance'
      | 'switch.kontor_sensor_illuminance'
      | 'switch.trappe_sensor_illuminance'
      | 'switch.automation_vagn_op'
      | 'switch.automation_timer'
      | 'switch.automation_simulerhjemme'
      | 'switch.automation_vagn_op_2'
      | 'switch.automation_forhavelys'
      | 'binary_sensor.spisebord_venstre_gardin_update_available'
      | 'binary_sensor.fryser_consumer_connected'
      | 'binary_sensor.0x54ef44100050fce9_update_available'
      | 'binary_sensor.terrasse_dor_contact'
      | 'binary_sensor.terrasse_dor_battery_low'
      | 'binary_sensor.terrasse_dor_tamper'
      | 'binary_sensor.terrasse_dor_moving'
      | 'binary_sensor.hoveddor_sensor_contact'
      | 'binary_sensor.kontor_hojre_sensor_contact'
      | 'binary_sensor.kontor_hojre_sensor_battery_low'
      | 'binary_sensor.kontor_hojre_sensor_tamper'
      | 'binary_sensor.kontor_hojre_sensor_moving'
      | 'binary_sensor.toilet_vindue_sensor_contact'
      | 'binary_sensor.toilet_vindue_sensor_battery_low'
      | 'binary_sensor.toilet_vindue_sensor_tamper'
      | 'binary_sensor.toilet_vindue_sensor_moving'
      | 'binary_sensor.under_vasken_sensor_water_leak'
      | 'binary_sensor.under_vasken_sensor_battery_low'
      | 'binary_sensor.under_vasken_sensor_tamper'
      | 'binary_sensor.handklaedevarmer_update_available'
      | 'binary_sensor.sovevaerelse_knap_update_available'
      | 'binary_sensor.kontor_gardin_update_available'
      | 'binary_sensor.bryggers_dor_sensor_contact'
      | 'binary_sensor.bryggers_dor_sensor_battery_low'
      | 'binary_sensor.bryggers_dor_sensor_tamper'
      | 'binary_sensor.bryggers_dor_sensor_moving'
      | 'binary_sensor.0x54ef4410004a4bad_charging_status'
      | 'binary_sensor.0x54ef4410004a4bad_running'
      | 'binary_sensor.0x54ef4410004a4bad_update_available'
      | 'binary_sensor.vaerksted_dor_contact'
      | 'binary_sensor.vaerksted_dor_battery_low'
      | 'binary_sensor.vaerksted_dor_tamper'
      | 'binary_sensor.vaerksted_dor_moving'
      | 'binary_sensor.roborock_q_revo_mop_drying'
      | 'binary_sensor.roborock_q_revo_mop_attached'
      | 'binary_sensor.roborock_q_revo_water_box_attached'
      | 'binary_sensor.roborock_q_revo_water_shortage'
      | 'binary_sensor.roborock_q_revo_cleaning'
      | 'select.roborock_q_revo_moppeintensitet'
      | 'select.roborock_q_revo_moppetilstand'
      | 'sensor.roborock_q_revo_hovedborste_restlevetid'
      | 'sensor.roborock_q_revo_sideborste_restlevetid'
      | 'sensor.roborock_q_revo_filter_restlevetid'
      | 'sensor.roborock_q_revo_sensor_resterende_tid'
      | 'sensor.roborock_q_revo_rengoringstid'
      | 'sensor.roborock_q_revo_samlet_rengoringstid'
      | 'sensor.roborock_q_revo_status'
      | 'sensor.roborock_q_revo_rengoringsareal'
      | 'sensor.roborock_q_revo_samlet_rengoringsareal'
      | 'sensor.roborock_q_revo_vacuum_error'
      | 'sensor.roborock_q_revo_batteri'
      | 'sensor.roborock_q_revo_last_clean_begin'
      | 'sensor.roborock_q_revo_last_clean_end'
      | 'sensor.roborock_q_revo_cleaning_progress'
      | 'sensor.roborock_q_revo_dock_error'
      | 'sensor.roborock_q_revo_mop_drying_remaining_time'
      | 'vacuum.roborock_q_revo'
      | 'binary_sensor.energydrikknap_update_available'
      | 'binary_sensor.koleskab_lage_contact'
      | 'binary_sensor.koleskab_lage_battery_low'
      | 'binary_sensor.koleskab_lage_tamper'
      | 'binary_sensor.koleskab_lage_moving'
      | 'binary_sensor.sovevaerelse_radiator_kontakt_consumer_connected'
      | 'number.roborock_q_revo_volume'
      | 'switch.roborock_q_revo_bornelas'
      | 'switch.roborock_q_revo_forstyr_ikke'
      | 'binary_sensor.stue_luftrenser_replace_filter'
      | 'time.roborock_q_revo_do_not_disturb_begin'
      | 'time.roborock_q_revo_do_not_disturb_end'
      | 'binary_sensor.opvaskemaskinevibrationer_vibration'
      | 'binary_sensor.zigbee2mqtt_bridge_connection_state'
      | 'binary_sensor.0x048727fffe9d7da6_contact'
      | 'sensor.beam_audio_input_format'
      | 'binary_sensor.beam_microphone'
      | 'media_player.beam'
      | 'binary_sensor.0x048727fffe9d7cb5_contact'
      | 'media_player.stuetv'
      | 'media_player.kontorettv'
      | 'update.koleskab_knap'
      | 'update.sofa_gardin'
      | 'update.spisebord_hojre_gardin'
      | 'media_player.kontor'
      | 'update.spisebord_venstre_gardin'
      | 'update.fryser'
      | 'update.handklaedevarmer'
      | 'media_player.nesthub_stuen'
      | 'update.sovevaerelse_knap'
      | 'sensor.stuen_audio_input_format'
      | 'media_player.playbase'
      | 'update.kontor_gardin'
      | 'number.beam_audio_delay'
      | 'number.beam_bass'
      | 'number.stue_balance'
      | 'number.beam_treble'
      | 'number.stue_sub_gain'
      | 'number.beam_surround_level'
      | 'number.beam_music_surround_level'
      | 'switch.beam_crossfade'
      | 'switch.beam_loudness'
      | 'switch.beam_surround_music_full_volume'
      | 'switch.beam_night_sound'
      | 'switch.beam_speech_enhancement'
      | 'switch.stue_subwoofer_enabled'
      | 'switch.beam_surround_enabled'
      | 'image.roborock_q_revo'
      | 'update.kokken_hjorne_gardin'
      | 'binary_sensor.stue_microphone'
      | 'media_player.stue'
      | 'update.energydrikknap'
      | 'update.entre_knap'
      | 'update.sovevaerelse_radiator_kontakt'
      | 'update.stue_luftrenser'
      | 'update.0x048727fffe9d7da6'
      | 'update.0x048727fffe9d7cb5'
      | 'cover.sofa_gardin'
      | 'cover.spisebord_hojre_gardin'
      | 'cover.spisebord_venstre_gardin'
      | 'button.canvas_fdb2_identify'
      | 'light.canvas_fdb2_2'
      | 'cover.kontor_gardin_2'
      | 'number.stuen_audio_delay'
      | 'number.stuen_bass'
      | 'number.playbase_balance'
      | 'number.stuen_treble'
      | 'number.biograf_surround_level'
      | 'number.biograf_music_surround_level'
      | 'media_player.huset'
      | 'binary_sensor.stue_2_microphone'
      | 'media_player.stue_2'
      | 'switch.sonos_stuen_crossfade'
      | 'switch.biograf_loudness'
      | 'switch.biograf_surround_music_full_volume'
      | 'switch.sonos_stuen_night_sound'
      | 'switch.sonos_stuen_speech_enhancement'
      | 'switch.sonos_stuen_surround_enabled'
      | 'cover.0x54ef4410004a4bad'
      | 'number.sirene_volume'
      | 'number.sirene_duration'
      | 'number.stue_bass'
      | 'number.bryggers_balance'
      | 'number.stue_treble'
      | 'switch.stue_crossfade'
      | 'switch.stue_loudness'
      | 'number.fryser_overload_protection'
      | 'number.sovevaerelse_radiator_kontakt_overload_protection'
      | 'switch.0x54ef44100050fce9'
      | 'switch.0x54ef44100050fce9_power_outage_memory'
      | 'switch.fryser_led_disabled_night'
      | 'switch.fryser_auto_off'
      | 'number.stue_2_bass'
      | 'number.kokken_balance'
      | 'number.stue_2_treble'
      | 'switch.fryser_button_lock'
      | 'switch.stue_2_crossfade'
      | 'switch.stue_2_loudness'
      | 'switch.handklaedevarmer_2'
      | 'switch.sovevaerelse_tv'
      | 'switch.vandhane'
      | 'switch.sovevaerelse_radiator_kontakt'
      | 'switch.sovevaerelse_radiator_kontakt_power_outage_memory'
      | 'media_player.forste_sal'
      | 'switch.sovevaerelse_radiator_kontakt_led_disabled_night'
      | 'switch.sovevaerelse_radiator_kontakt_auto_off'
      | 'switch.sovevaerelse_radiator_kontakt_button_lock'
      | 'media_player.cc_sovevaerelset'
      | 'switch.stue_luftrenser_led_enable'
      | 'switch.stue_luftrenser_child_lock'
      | 'switch.zigbee2mqtt_bridge_permit_join'
      | 'media_player.nesthub_sovevaerelse'
      | 'sensor.bibliotek_klima_current_temperature'
      | 'sensor.bibliotek_klima_current_humidity'
      | 'sensor.tado_smart_radiator_thermostat_va2452622848_current_temperature'
      | 'sensor.tado_smart_radiator_thermostat_va2452622848_current_humidity'
      | 'sensor.kontor_klima_current_temperature'
      | 'sensor.kontor_klima_current_humidity'
      | 'sensor.tado_smart_thermostat_su3387510528_current_temperature'
      | 'sensor.tado_smart_thermostat_su3387510528_current_humidity'
      | 'button.tado_internet_bridge_ib1994001664_identify'
      | 'button.bibliotek_klima_identify'
      | 'button.tado_smart_radiator_thermostat_va2452622848_identify'
      | 'button.kontor_klima_identify'
      | 'button.tado_smart_thermostat_su3387510528_identify'
      | 'select.tado_smart_radiator_thermostat_va4208528640_temperature_display_units'
      | 'select.tado_smart_radiator_thermostat_va2452622848_temperature_display_units'
      | 'select.tado_smart_radiator_thermostat_va0666439936_temperature_display_units'
      | 'select.tado_smart_thermostat_su3387510528_temperature_display_units'
      | 'climate.bibliotek_klima'
      | 'climate.tado_smart_radiator_thermostat_va2452622848'
      | 'climate.kontor_klima'
      | 'climate.tado_smart_thermostat_su3387510528'
      | 'sensor.presence_sensor_fp2_83b3_light_sensor_light_level'
      | 'button.presence_sensor_fp2_83b3_identify'
      | 'binary_sensor.kontor_tilvaerelse'
      | 'binary_sensor.kontor_tilstedevaerelse_stol'
      | 'binary_sensor.kontor_tilstedevaerelse_klaver'
      | 'binary_sensor.kontor_tilstedevaerelse_skrivebord'
      | 'alarm_control_panel.alarmo'
      | 'light.sovevaerelse'
      | 'light.stue'
      | 'light.kontor'
      | 'light.repoet_2'
      | 'light.entre'
      | 'media_player.kokken_mini'
      | 'media_player.cc_stuen'
      | 'media_player.nesthub_kontor'
      | 'fan.stue_luftrenser'
      | 'select.opvaskemaskinevibrationer_sensitivity'
      | 'select.zigbee2mqtt_bridge_log_level'
      | 'select.sofa_gardin_motor_speed'
      | 'select.kokken_hjorne_gardin_motor_speed'
      | 'button.zigbee2mqtt_bridge_restart'
      | 'button.koleskab_knap_identify'
      | 'button.spisebord_hojre_gardin_identify'
      | 'button.spisebord_venstre_gardin_identify'
      | 'button.sovevaerelse_knap_identify'
      | 'button.kontor_gardin_identify'
      | 'button.entre_knap_identify'
      | 'button.energydrikknap_identify'
      | 'button.stue_luftrenser_identify'
      | 'button.0x048727fffe9d7da6_identify'
      | 'button.0x048727fffe9d7cb5_identify'
      | 'calendar.mikkel_mbirch_dk'
      | 'calendar.fodselsdage'
      | 'calendar.helligdage_i_danmark'
      | 'calendar.smarthomecalendar'
      | 'calendar.affaldshentning'
      | 'script.sluk_alle_lamper'
      | 'script.notifcer_om_abne_enheder'
      | 'script.sluk_alle_tv'
      | 'script.1657997222440'
      | 'script.alarm_trigger'
      | 'script.alarm_stop_trigger'
      | 'script.notify_about_tesla_trip'
      | 'script.aben_gardiner_nogle_er_hjemme'
      | 'script.ingen_hjemme_skal_sprinkler_starte'
      | 'script.notificer_om_frokost'
      | 'script.vis_qr_pa_fladskarm'
      | 'script.sla_stovsugning_fra'
      | 'script.togglestovsuger'
      | 'script.1698258306760'
      | 'script.1699994153775'
      | 'script.lavbilligstromevents'
      | 'script.v2_set_garbage_generic_dates_for_next_24_hours_dupliker'
      | 'sensor.nordpool_kwh_dk1_dkk_3_10_025'
      | 'button.ignore_all_issues'
      | 'button.unignore_all_issues'
      | 'button.homeassistant_restart'
      | 'button.homeassistant_reload'
      | 'event.repair'
      | 'sensor.issues'
      | 'sensor.active_issues'
      | 'sensor.ignored_issues'
      | 'sensor.air_quality'
      | 'sensor.alarm_control_panels'
      | 'sensor.areas'
      | 'sensor.automations'
      | 'sensor.binary_sensors'
      | 'sensor.buttons'
      | 'sensor.calendars'
      | 'sensor.cameras'
      | 'sensor.climate'
      | 'sensor.covers'
      | 'sensor.dates'
      | 'sensor.datetimes'
      | 'sensor.devices'
      | 'sensor.device_trackers'
      | 'sensor.entities'
      | 'sensor.fans'
      | 'sensor.humidifiers'
      | 'sensor.integrations'
      | 'sensor.custom_integrations'
      | 'sensor.input_booleans'
      | 'sensor.input_buttons'
      | 'sensor.input_datetimes'
      | 'sensor.input_numbers'
      | 'sensor.input_selects'
      | 'sensor.input_texts'
      | 'sensor.images'
      | 'sensor.lights'
      | 'sensor.locks'
      | 'sensor.media_players'
      | 'sensor.numbers'
      | 'sensor.persistent_notifications'
      | 'sensor.persons'
      | 'sensor.remotes'
      | 'sensor.scenes'
      | 'sensor.scripts'
      | 'sensor.selects'
      | 'sensor.sensors'
      | 'sensor.sirens'
      | 'sensor.suns'
      | 'sensor.stt'
      | 'sensor.switches'
      | 'sensor.texts'
      | 'sensor.times'
      | 'sensor.tts'
      | 'sensor.vacuums'
      | 'sensor.update'
      | 'sensor.water_heaters'
      | 'sensor.weather'
      | 'sensor.zones'
      | 'switch.cloud_alexa'
      | 'switch.cloud_alexa_report_state'
      | 'switch.cloud_google'
      | 'switch.cloud_google_report_state'
      | 'switch.cloud_remote'
      | 'automation.sluk_handklaedevarmer'
      | 'automation.sluk_tv'
      | 'automation.sluk_alt'
      | 'automation.luk_vinduet'
      | 'automation.solen_skinner_og_tv_et_er_taendt'
      | 'automation.pamind_om_opdatering'
      | 'automation.bibliotek_knap'
      | 'automation.sovevaerelses_knap'
      | 'automation.ved_solnedgang'
      | 'automation.arm_disarm_alarm'
      | 'automation.entre_knap'
      | 'automation.update_lock_when_servicecall'
      | 'automation.sluk_lys_efter_tid'
      | 'automation.tesla_ankomer'
      | 'automation.automation_24'
      | 'automation.ny_automatisering_2'
      | 'automation.kritiske_kontakter'
      | 'automation.notifications'
      | 'automation.postkasse_offentlig_abnes'
      | 'automation.energidrikknap'
      | 'automation.rapport_elbil_korsel'
      | 'automation.klima_kontrol'
      | 'automation.kalender_stovsug'
      | 'automation.tesla_pa_vej_hjem'
      | 'automation.aben_garage_latch_port'
      | 'automation.afspil_musik_ved_sceneskift'
      | 'automation.walkin_knap'
      | 'automation.kalender_aben_gardiner'
      | 'automation.hoveddor_lukkes_notificer_om_abne_ting'
      | 'automation.solnedgang_taend_vandhane'
      | 'automation.sluk_efter_20min_sprinkler'
      | 'automation.kalender_frokostbesked'
      | 'automation.kl_9_reset_frokostbeskedsendtidag'
      | 'automation.notificer_om_batteri_kl_20'
      | 'automation.automation_43'
      | 'automation.tael_koleskabslage'
      | 'automation.kalender_moppe'
      | 'automation.for_stovsugning_ma_jeg_stovsuge'
      | 'automation.kl6_7_garage_lukker_sluk_alt'
      | 'automation.canvas_autotaend_sluk'
      | 'automation.kl_10'
      | 'automation.bevaegelse_entre'
      | 'automation.bevaegelse_repoet'
      | 'automation.houseissleeping_bevaegelse_i_entre_taend_kokken_spisestue'
      | 'automation.kokken_knap_styrbar'
      | 'automation.stearinlys_switch'
      | 'automation.luftrenser_taend_nar_alarm_er_fra'
      | 'automation.kontor_bevaegelse'
      | 'automation.nar_i_bad_taend_handklaedevarmer'
      | 'automation.stue_knap'
      | 'automation.kontor_hent_vand'
      | 'automation.kontor_sluk_alt_andet_nar_1_er_hjemme'
      | 'automation.kalender_force_oplad_3'
      | 'automation.kalender_forceoplad1'
      | 'automation.nynynyautostrom'
      | 'automation.presence_simulating'
      | 'automation.sovevaerelse_varme'
      | 'automation.i_bad_annoncer_dorabninger'
      | 'automation.badevaerelses_vindue_sonos_plz_luk'
      | 'sensor.stuetv_forbrug_power'
      | 'sensor.stuetv_forbrug_energy'
      | 'sensor.koleskab_forbrug_energy'
      | 'sensor.koleskab_forbrug_power'
      | 'sensor.biograf_power'
      | 'sensor.biograf_energy'
      | 'sensor.nighthawkunload_power'
      | 'sensor.nighthawkunload_energy'
      | 'sensor.stue_luftrenser_power'
      | 'sensor.stue_luftrenser_energy'
      | 'sensor.standerlampen_1_power'
      | 'sensor.standerlampen_1_energy'
      | 'sensor.standerlampen_2_power'
      | 'sensor.standerlampen_2_energy'
      | 'sensor.venstre_power'
      | 'sensor.venstre_energy'
      | 'sensor.tv_under_power'
      | 'sensor.tv_under_energy'
      | 'sensor.sengegavl_power'
      | 'sensor.sengegavl_energy'
      | 'sensor.hojre_power'
      | 'sensor.hojre_energy'
      | 'sensor.spisebord_strip_power'
      | 'sensor.spisebord_strip_energy'
      | 'sensor.spot_k7_power'
      | 'sensor.spot_k7_energy'
      | 'sensor.spot_k3_power'
      | 'sensor.spot_k3_energy'
      | 'sensor.spot_k4_power'
      | 'sensor.spot_k4_energy'
      | 'sensor.spot_k1_power'
      | 'sensor.spot_k1_energy'
      | 'sensor.spot_k2_power'
      | 'sensor.spot_k2_energy'
      | 'sensor.spot_e1_power'
      | 'sensor.spot_e1_energy'
      | 'sensor.spot_k5_power'
      | 'sensor.spot_k5_energy'
      | 'sensor.spot_k6_power'
      | 'sensor.spot_k6_energy'
      | 'sensor.spot_e2_power'
      | 'sensor.spot_e2_energy'
      | 'sensor.spot_e3_power'
      | 'sensor.spot_e3_energy'
      | 'sensor.loft_power'
      | 'sensor.loft_energy'
      | 'sensor.spisebord_2_power'
      | 'sensor.spisebord_2_energy'
      | 'sensor.spisebord_1_power'
      | 'sensor.spisebord_1_energy'
      | 'sensor.spot_f1_power'
      | 'sensor.spot_f1_energy'
      | 'sensor.venstre_side_power'
      | 'sensor.venstre_side_energy'
      | 'sensor.spot_f2_power'
      | 'sensor.spot_f2_energy'
      | 'sensor.badevaerelse_mini_power'
      | 'sensor.badevaerelse_mini_energy'
      | 'sensor.spot_f4_power'
      | 'sensor.spot_f4_energy'
      | 'sensor.kokken_mini_power'
      | 'sensor.kokken_mini_energy'
      | 'sensor.spot_f3_power'
      | 'sensor.spot_f3_energy'
      | 'sensor.skaenk_power'
      | 'sensor.skaenk_energy'
      | 'sensor.hojre_side_power'
      | 'sensor.hojre_side_energy'
      | 'sensor.glodepaere_power'
      | 'sensor.glodepaere_energy'
      | 'sensor.dimmable_light_1_power'
      | 'sensor.dimmable_light_1_energy'
      | 'sensor.repo_power'
      | 'sensor.repo_energy'
      | 'sensor.laeselampe_power'
      | 'sensor.laeselampe_energy'
      | 'sensor.stue_2_power'
      | 'sensor.stue_2_energy'
      | 'sensor.over_panel_power'
      | 'sensor.over_panel_energy'
      | 'sensor.garage_power'
      | 'sensor.garage_energy'
      | 'sensor.stue_power'
      | 'sensor.stue_energy'
      | 'sensor.walk_in_2_power'
      | 'sensor.walk_in_2_energy'
      | 'sensor.walk_in_3_power'
      | 'sensor.walk_in_3_energy'
      | 'sensor.tv_venstre_power'
      | 'sensor.tv_venstre_energy'
      | 'sensor.s1_power'
      | 'sensor.s1_energy'
      | 'sensor.walk_in_1_power'
      | 'sensor.walk_in_1_energy'
      | 'sensor.tv_hojre_power'
      | 'sensor.tv_hojre_energy'
      | 'sensor.s3_power'
      | 'sensor.s3_energy'
      | 'sensor.badevaerelse_power'
      | 'sensor.badevaerelse_energy'
      | 'sensor.s2_power'
      | 'sensor.s2_energy'
      | 'sensor.playbase_power'
      | 'sensor.playbase_energy'
      | 'sensor.nesthub_kontor_power'
      | 'sensor.nesthub_kontor_energy'
      | 'sensor.nesthub_stuen_power'
      | 'sensor.nesthub_stuen_energy'
      | 'sensor.nesthub_sovevaerelse_power'
      | 'sensor.nesthub_sovevaerelse_energy'
      | 'sensor.kokken_power'
      | 'sensor.kokken_energy'
      | 'sensor.energi_data_service_co2'
      | 'sensor.energi_data_service'
      | 'sensor.bmt_charging_rate'
      | 'sensor.bmt_energy_added'
      | 'sensor.bmt_charger_power'
      | 'sensor.bmt_odometer'
      | 'sensor.nighthawk_shift_state'
      | 'sensor.bmt_range'
      | 'sensor.bmt_temperature_outside'
      | 'sensor.bmt_temperature_inside'
      | 'sensor.nighthawk_time_charge_complete'
      | 'sensor.nighthawk_tpms_front_left'
      | 'sensor.nighthawk_tpms_front_right'
      | 'sensor.nighthawk_tpms_rear_left'
      | 'sensor.nighthawk_tpms_rear_right'
      | 'sensor.nighthawk_arrival_time'
      | 'sensor.nighthawk_distance_to_arrival'
      | 'sensor.nighthawk_data_last_update_time'
      | 'sensor.nighthawk_polling_interval'
      | 'lock.bmt_doors'
      | 'lock.bmt_charge_port_latch'
      | 'climate.bmt_hvac_climate_system'
      | 'cover.bmt_charger_door'
      | 'cover.bmt_frunk'
      | 'cover.bmt_trunk'
      | 'cover.bmt_windows'
      | 'binary_sensor.bmt_parking_brake'
      | 'binary_sensor.bmt_online'
      | 'binary_sensor.nighthawk_asleep'
      | 'binary_sensor.bmt_charger'
      | 'binary_sensor.bmt_charging'
      | 'binary_sensor.nighthawk_doors'
      | 'binary_sensor.nighthawk_windows'
      | 'binary_sensor.nighthawk_scheduled_charging'
      | 'binary_sensor.nighthawk_scheduled_departure'
      | 'binary_sensor.nighthawk_user_present'
      | 'device_tracker.bmt_location_tracker'
      | 'device_tracker.nighthawk_destination_location_tracker'
      | 'switch.nighthawk_heated_steering'
      | 'switch.bmt_sentry_mode'
      | 'switch.bmt_polling'
      | 'switch.bmt_charger'
      | 'switch.nighthawk_valet_mode'
      | 'button.bmt_horn'
      | 'button.bmt_flash_lights'
      | 'button.bmt_wake_up'
      | 'button.bmt_force_data_update'
      | 'button.nighthawk_remote_start'
      | 'select.bmt_cabin_overheat_protection'
      | 'select.nighthawk_heated_steering_wheel'
      | 'select.bmt_heated_seat_left'
      | 'select.bmt_heated_seat_right'
      | 'select.bmt_heated_seat_rear_left'
      | 'select.bmt_heated_seat_rear_center'
      | 'select.bmt_heated_seat_rear_right'
      | 'update.bmt_software_update'
      | 'number.bmt_charge_limit'
      | 'number.bmt_charging_amps'
      | 'text.nighthawk_teslamate_id'
      | 'sensor.bmt_battery'
      | 'binary_sensor.updater'
      | 'media_player.badevaerelse_mini'
      | 'media_player.kontoret'
      | 'media_player.bibliotek'
      | 'media_player.pladeafspiller'
      | 'number.pladeafspiller_bass'
      | 'number.pladeafspiller_treble'
      | 'switch.sonos_pladeafspiller_crossfade'
      | 'switch.kokken_loudness'
      | 'sensor.cert_expiry_timestamp_home_mbirch_dk'
      | 'number.sonos_bass'
      | 'number.sonos_treble'
      | 'switch.sonos_crossfade'
      | 'switch.sonos_loudness'
      | 'media_player.garage'
      | 'media_player.lyd_kontor'
      | 'sensor.all_light_power'
      | 'sensor.all_light_energy'
      | 'sensor.all_media_player_power'
      | 'sensor.all_media_player_energy'
      | 'binary_sensor.nest_protect_stuen_buzzer_test'
      | 'binary_sensor.nest_protect_stuen_battery_health'
      | 'binary_sensor.nest_protect_stuen_smoke_test'
      | 'binary_sensor.nest_protect_stuen_speaker_test'
      | 'binary_sensor.nest_protect_stuen_pir_test'
      | 'binary_sensor.nest_protect_stuen_humidity_test'
      | 'binary_sensor.nest_protect_stuen_smoke_status'
      | 'binary_sensor.nest_protect_stuen_co_status'
      | 'binary_sensor.nest_protect_stuen_heat_status'
      | 'binary_sensor.nest_protect_stuen_co_test'
      | 'binary_sensor.nest_protect_stuen_led_test'
      | 'binary_sensor.nest_protect_stuen_wifi_test'
      | 'binary_sensor.nest_protect_repo_buzzer_test'
      | 'binary_sensor.nest_protect_repo_battery_health'
      | 'binary_sensor.nest_protect_repo_smoke_test'
      | 'binary_sensor.nest_protect_repo_speaker_test'
      | 'binary_sensor.nest_protect_repo_pir_test'
      | 'binary_sensor.nest_protect_repo_humidity_test'
      | 'binary_sensor.nest_protect_repo_smoke_status'
      | 'binary_sensor.nest_protect_repo_co_status'
      | 'binary_sensor.nest_protect_repo_heat_status'
      | 'binary_sensor.nest_protect_repo_co_test'
      | 'binary_sensor.nest_protect_repo_led_test'
      | 'binary_sensor.nest_protect_repo_wifi_test'
      | 'binary_sensor.nest_protect_bryggers_buzzer_test'
      | 'binary_sensor.nest_protect_bryggers_battery_health'
      | 'binary_sensor.nest_protect_bryggers_smoke_test'
      | 'binary_sensor.nest_protect_bryggers_speaker_test'
      | 'binary_sensor.nest_protect_bryggers_pir_test'
      | 'binary_sensor.nest_protect_bryggers_humidity_test'
      | 'binary_sensor.nest_protect_bryggers_smoke_status'
      | 'binary_sensor.nest_protect_bryggers_co_status'
      | 'binary_sensor.nest_protect_bryggers_heat_status'
      | 'binary_sensor.nest_protect_bryggers_co_test'
      | 'binary_sensor.nest_protect_bryggers_led_test'
      | 'binary_sensor.nest_protect_bryggers_wifi_test'
      | 'sensor.nest_protect_stuen_replace_by'
      | 'sensor.nest_protect_stuen_battery_level'
      | 'sensor.nest_protect_repo_replace_by'
      | 'sensor.nest_protect_repo_battery_level'
      | 'sensor.nest_protect_bryggers_replace_by'
      | 'sensor.nest_protect_bryggers_battery_level'
      | 'select.nest_protect_stuen_brightness'
      | 'select.nest_protect_repo_brightness'
      | 'select.nest_protect_bryggers_brightness'
      | 'switch.nest_protect_stuen_steam_check'
      | 'switch.nest_protect_stuen_pathlight'
      | 'switch.nest_protect_stuen_nightly_promise'
      | 'switch.nest_protect_stuen_heads_up'
      | 'switch.nest_protect_repo_steam_check'
      | 'switch.nest_protect_repo_pathlight'
      | 'switch.nest_protect_repo_nightly_promise'
      | 'switch.nest_protect_repo_heads_up'
      | 'switch.nest_protect_bryggers_steam_check'
      | 'switch.nest_protect_bryggers_pathlight'
      | 'switch.nest_protect_bryggers_nightly_promise'
      | 'switch.nest_protect_bryggers_heads_up'
      | 'number.vaerksted_balance'
      | 'number.pladespiller_balance'
      | 'sensor.all_sensor_power'
      | 'sensor.all_sensor_energy'
      | 'sensor.all_standby_power'
      | 'sensor.all_standby_energy'
      | 'sensor.portainer_mbirch_dk_cert_expiry'
      | 'sensor.nighthawkchargedkwh_compensation'
      | 'sensor.totalkwhusedinhouse_cost'
      | 'sensor.nighthawkchargedkwh_cost'
      | 'switch.automation_kontor_sensor'
      | 'switch.automation_entre_sensor'
      | 'switch.automation_repo_sensor'
      | 'sensor.meater_694c1ff095270941a8413494455d386903b9dfeee43619d942f04872e06a58b3_ambient'
      | 'sensor.meater_694c1ff095270941a8413494455d386903b9dfeee43619d942f04872e06a58b3_internal'
      | 'sensor.meater_694c1ff095270941a8413494455d386903b9dfeee43619d942f04872e06a58b3_cook_name'
      | 'sensor.meater_694c1ff095270941a8413494455d386903b9dfeee43619d942f04872e06a58b3_cook_state'
      | 'sensor.meater_694c1ff095270941a8413494455d386903b9dfeee43619d942f04872e06a58b3_cook_target_temp'
      | 'sensor.meater_694c1ff095270941a8413494455d386903b9dfeee43619d942f04872e06a58b3_cook_peak_temp'
      | 'sensor.meater_694c1ff095270941a8413494455d386903b9dfeee43619d942f04872e06a58b3_cook_time_remaining'
      | 'sensor.meater_694c1ff095270941a8413494455d386903b9dfeee43619d942f04872e06a58b3_cook_time_elapsed'
      | 'climate.sovevarelse_radiator'
      | 'sensor.time'
      | 'sensor.date'
      | 'sensor.biograf_power_2'
      | 'sensor.biograf_energy_2'
      | 'sensor.bordlampe_power'
      | 'sensor.bordlampe_energy';
  }
}
