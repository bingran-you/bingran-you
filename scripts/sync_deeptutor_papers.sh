#!/bin/zsh

set -euo pipefail

SRC_ROOT="/Users/bingran_you/DeepTutor/DeepTutorDataBase"
DEST_ROOT="/Users/bingran_you/Downloads/GitHub/bingran-you/Papers"

sync_file() {
  local src="$1"
  local dest="$2"

  if [[ -e "$src" ]]; then
    /usr/bin/rsync -a "$src" "$dest"
  else
    /bin/rm -f "$dest"
  fi
}

if [[ ! -d "$SRC_ROOT/Documents" ]]; then
  echo "Missing source directory: $SRC_ROOT/Documents" >&2
  exit 1
fi

/bin/mkdir -p "$DEST_ROOT/Documents"

# Mirror the paper tree so git sees real file changes inside the repo.
/usr/bin/rsync -a --delete "$SRC_ROOT/Documents/" "$DEST_ROOT/Documents/"
sync_file "$SRC_ROOT/library_hierarchy.txt" "$DEST_ROOT/library_hierarchy.txt"
sync_file "$SRC_ROOT/structure.json" "$DEST_ROOT/structure.json"
