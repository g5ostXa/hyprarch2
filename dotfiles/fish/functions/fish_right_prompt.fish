function fish_right_prompt
        switch "$fish_key_bindings"
                case fish_hybrid_key_bindings fish_vi_key_bindings fish_helix_keybindings
                        set STARSHIP_KEYMAP "$fish_bind_mode"
                case '*'
                        set STARSHIP_KEYMAP insert
        end
    
        set STARSHIP_CMD_PIPESTATUS $pipestatus
        set STARSHIP_CMD_STATUS $status
        # Account for changes in variable name between v2.7 and v3.0
        set STARSHIP_DURATION "$CMD_DURATION$cmd_duration"
    
        # Now it's safe to call job count function (after status capture)
        __starship_set_job_count
    
        if contains -- --final-rendering $argv; or test "$RIGHT_TRANSIENT" = "1"
                set -g RIGHT_TRANSIENT 0
                if type -q starship_transient_rprompt_func
                        starship_transient_rprompt_func --terminal-width="$COLUMNS" --status=$STARSHIP_CMD_STATUS --pipestatus="$STARSHIP_CMD_PIPESTATUS" --keymap=$STARSHIP_KEYMAP --cmd-duration=$STARSHIP_DURATION --jobs=$STARSHIP_JOBS
                else
                        printf ""
                end
        else
                /usr/bin/starship prompt --right --terminal-width="$COLUMNS" --status=$STARSHIP_CMD_STATUS --pipestatus="$STARSHIP_CMD_PIPESTATUS" --keymap=$STARSHIP_KEYMAP --cmd-duration=$STARSHIP_DURATION --jobs=$STARSHIP_JOBS
        end
end
