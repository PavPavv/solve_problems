#!/bin/sh

if [ "$#" != "1" ]
then
  echo "Нужно передать имя ОДНОГО файла без расширения"

else
# Get the absolute path of the current directory
current_dir=$(pwd)
# Find TypeScript files in child directories
ts_file=$(find . -type f -name "$1.ts")
  if [ -n "$ts_file" ]
  then
    # Calculate the relative path
    relative_path=$(realpath --relative-to="$current_dir" "$ts_file")
    full_path_to_file="./$relative_path"
    full_path_to_js_file="${full_path_to_file%??}js"
    tsc $full_path_to_file && node $full_path_to_js_file && rm -rf $full_path_to_js_file
  else
    echo "Такой typescript-файл не найден"
  fi
fi