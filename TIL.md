# Today I Learned (TIL)

## Unix/Linux Commands

### `lsof` - List Open Files

**`lsof`** stands for "**list open files**" - a powerful Unix/Linux command that shows information about files currently opened by processes.

#### What it shows:

- Files currently open by any process
- Network connections (sockets)
- Pipes and FIFOs
- Character and block devices
- Directories being accessed

#### Key flags:

- **`-t`** = **terse output** (only show PIDs, no headers or other info)
- **`-i`** = **internet addresses** (show network connections)

#### Common usage patterns:

```bash
# Show all processes using port 3000 with full details
lsof -i:3000

# Show only PIDs using port 3000 (terse + internet)
lsof -ti:3000

# Show all network connections
lsof -i

# Show all TCP connections
lsof -i tcp

# Show all UDP connections
lsof -i udp
```

#### Practical example - Finding and killing processes on a port:

```bash
# 1. Find processes using port 3000
lsof -ti:3000
# Returns: 77688

# 2. Get process details
ps -p 77688 -o pid,ppid,command
# Shows: Next.js server

# 3. Kill the process
kill 77688

# 4. Verify port is free
lsof -ti:3000
# Returns nothing = port is available
```

#### Why `-ti:3000` is useful:

- `-i:3000` = "show network connections on port 3000"
- `-t` = "just give me the PIDs, not the verbose output"
- Result: Clean list of process IDs that can be used with `kill`

This is a very common pattern for finding and killing processes that are using specific network ports!
