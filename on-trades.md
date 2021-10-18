# Trades

### Electricity

- 1.15 KVA ~ 5 Amps (small apartment in PT during the 70s)
- 3.45 KVA  ~ 15 Amps (small apartment in PT)
- 12 Amps when standby, 20 Amps when working (apollo 13)
- 50 KVA (domestic limit from local authorities in PT)

### Mechanics

- [animated engines](https://animatedengines.com)

### Sysadmin

#### Domain settings on Github pages

- It seems to be preferable to use the *www* subdomain instead of the apex domain.
- On your domain provider advanced DNS tab, set:

		A record from @ to 185.199.108.153
		A record from @ to 185.199.109.153
		A record from @ to 185.199.110.153
		A record from @ to 185.199.111.153
		CNAME from www to yourdomain.extension

#### Linux distros

Tested:

- Mint (polished - 1G standby)
- Manjaro (advanced / xfce - 750mb standby)
- Lubuntu (fastest - 400MB standby)

To test:

- Ubuntu (gnome)