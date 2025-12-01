export default {
  commands: {
    insert_template: "Open Insert Template modal",
    replace_in_file: "Replace templates in the current file",
    jump_to_next_cursor: "Jump to next cursor location",
    create_new_note_from_template: "Create new note from template"
  },
  settings: {
    templates_folder: "Template folder location",
    templates_folder_desc: "Files in this folder will be available as templates.",
    internal_variables_functions: "Internal variables and functions",
    internal_variables_functions_desc_1: "Templater provides various predefined variables/functions for you to use.",
    internal_variables_functions_desc_2: "Check out the ",
    internal_variables_functions_desc_3: " for a complete list of all available internal variables/functions.",
    syntax_highlighting: "Syntax highlighting",
    syntax_highlighting_desc: "Highlight Templater syntax in your notes in edit mode.",
    desktop_syntax_highlighting: "Desktop syntax highlighting",
    mobile_syntax_highlighting: "Mobile syntax highlighting",
    syntax_highlighting_mobile_desc: "Highlight Templater syntax in your notes on mobile in edit mode. Use with caution: this might break live preview on mobile platforms.",
    auto_jump_to_cursor: "Auto jump to cursor",
    auto_jump_to_cursor_desc_1: "Automatically trigger ",
    auto_jump_to_cursor_desc_2: " after inserting a template.",
    auto_jump_to_cursor_desc_3: "You can also set up a hotkey to manually trigger ",
    auto_jump_to_cursor_desc_4: ".",
    trigger_on_file_creation: "Trigger Templater on new file creation",
    trigger_on_file_creation_desc: "Automatically apply templates when new files are created.",
    templates_hotkeys: "Templates hotkeys",
    folder_templates: "Folder templates",
    folder_templates_desc: "Apply templates based on the folder where a file is created.",
    file_templates: "File templates",
    file_templates_desc: "Apply templates based on file names matching a regular expression.",
    startup_templates: "Startup templates",
    startup_templates_desc: "Templates to execute when Obsidian starts.",
    user_script_functions: "User script functions",
    user_script_functions_desc: "Custom functions defined in your user scripts.",
    user_system_command_functions: "User system command functions",
    user_system_command_functions_desc: "Functions that execute system commands.",
    add_template_hotkey: "Add template hotkey",
    add_folder_template: "Add folder template",
    add_file_regex: "Add file regex",
    add_startup_template: "Add startup template",
    add_new_user_function: "Add new user function"
  },
  common: {
    documentation: "documentation"
  },
  errors: {
    template_not_found: "Could not find the template file associated with this hotkey",
    mobile_unsupported_template: "Error_MobileUnsupportedTemplate",
    syntax_highlighting: "Could not enable syntax highlighting. Could not define language.",
    prompt_cancelled: "Cancelled prompt"
  }
}