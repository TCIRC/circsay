# circsay

## Simple shell injection CTF problem

## Install

Requirements: Docker, git

```bash
git clone https://github.com/TCIRC/circsay.git
cd circsay
./run.sh
```

## Solution

1. `` `ls` `` to print directory contents
2. `` `cat flag.txt`; echo a `` to print flag and escape cowsay
3. flag.txt is cow language to output the flag, google `cow language online` and paste the code into [the first search result](https://tio.run/#)
4. the flag is `FLAG{why_u_rce_my_machine_u_bad_bad_guy_sub_to_nekomata_okayu_now}`
