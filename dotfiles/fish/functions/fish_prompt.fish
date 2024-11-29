function fish_prompt
    set_color $fish_color_cwd && echo -n '[' 
    set_color yellow && echo -n (basename $PWD)
    set_color $fish_color_cwd
    echo -n '  ] ' 
end
