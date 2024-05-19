
# 🚧 Repository update 🚧

This repository has been archived. Please feel free to [contact me directly](https://github.com/danielroe) if you have any questions.

<hr>
> This is a reproduction to pair with https://github.com/GoogleChromeLabs/critters/issues/78

## Get started

```bash
git clone git@github.com:danielroe/critters-test.git
cd critters-test
yarn && yarn build

# Test with critters enabled
# https://httpd.apache.org/docs/2.4/programs/ab.html
CRITTERS=true yarn start
ab -n 100 -c 5 http://localhost:3000/

# Test without critters
yarn start
ab -n 100 -c 5 http://localhost:3000/
```

## Results

### Without critters

```
Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        25397 bytes

Concurrency Level:      5
Time taken for tests:   0.883 seconds
Complete requests:      100
Failed requests:        0
Total transferred:      2562100 bytes
HTML transferred:       2539700 bytes
Requests per second:    113.21 [#/sec] (mean)
Time per request:       44.167 [ms] (mean)
Time per request:       8.833 [ms] (mean, across all concurrent requests)
Transfer rate:          2832.51 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       1
Processing:    11   43  14.3     40      88
Waiting:        6   30  14.8     29      88
Total:         11   43  14.2     40      88

Percentage of the requests served within a certain time (ms)
  50%     40
  66%     47
  75%     53
  80%     53
  90%     62
  95%     69
  98%     88
  99%     88
 100%     88 (longest request)
 ```

### With critters
```
Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        23625 bytes

Concurrency Level:      5
Time taken for tests:   21.912 seconds
Complete requests:      100
Failed requests:        84
   (Connect: 0, Receive: 0, Length: 84, Exceptions: 0)
Total transferred:      2384984 bytes
HTML transferred:       2362584 bytes
Requests per second:    4.56 [#/sec] (mean)
Time per request:       1095.611 [ms] (mean)
Time per request:       219.122 [ms] (mean, across all concurrent requests)
Transfer rate:          106.29 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:   451 1060 484.3    750    2323
Waiting:      351  920 457.0    722    2323
Total:        451 1060 484.3    750    2324

Percentage of the requests served within a certain time (ms)
  50%    750
  66%   1104
  75%   1521
  80%   1638
  90%   1719
  95%   2195
  98%   2196
  99%   2324
 100%   2324 (longest request)
```

