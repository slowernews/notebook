# Notes on Sysadmin

## Domain settings

### Github pages

- It seems to be preferable to use the *www* subdomain instead of the apex domain.
- On your domain provider advanced DNS tab, set:

		A record from @ to 185.199.108.153
		A record from @ to 185.199.109.153
		A record from @ to 185.199.110.153
		A record from @ to 185.199.111.153
		CNAME from www to yourdomain.extension

## Linux distros

- Mint (polished - 1G standby)
- Manjaro (advanced / xfce - 750mb standby)
- Lubuntu (fastest - 400MB standby)