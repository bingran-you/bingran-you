# palace-inner — vendored from henryjeff/portfolio-inner-site

This directory is a near-verbatim vendor copy of:

  https://github.com/henryjeff/portfolio-inner-site

Original work © Henry Heffernan. The upstream repository does not include a
license file. **This vendor copy is used here with explicit, direct permission
from Henry Heffernan**, granted to Bingran You for use in his open-source
personal site.

Without that explicit permission this copy would not be redistributable.
Anyone reading this who wants to do something similar should ask Henry directly
rather than re-vendor this directory.

Modifications in this vendor copy (Bingran You, 2026):

- `package.json` — set `"name": "palace-inner"` and `"homepage": "/palace/os"`
  so CRA writes asset URLs that work when the build is served under
  `/palace/os/` on the host Next.js site.
- Personal content (text, project descriptions, photos, resume link, contact
  details) will be swapped to Bingran's over time. Build-system / OS-shell
  components stay as Henry built them.

Please direct any questions about the original implementation to Henry; any
questions about this vendor copy and Bingran's content to Bingran.
