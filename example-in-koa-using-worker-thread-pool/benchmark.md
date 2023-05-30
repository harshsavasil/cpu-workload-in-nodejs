ab -n 10000 -c 100 "http://localhost:8000/?a=109834567&b=98767500"

Server Software:        
Server Hostname:        localhost
Server Port:            8000

Document Path:          /?a=109834567&b=98767500
Document Length:        17 bytes

Concurrency Level:      100
Time taken for tests:   160.602 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      1590000 bytes
HTML transferred:       170000 bytes
Requests per second:    62.27 [#/sec] (mean)
Time per request:       1606.019 [ms] (mean)
Time per request:       16.060 [ms] (mean, across all concurrent requests)
Transfer rate:          9.67 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   2.1      0      25
Processing:   121 1595  97.4   1595    1918
Waiting:      119 1595  97.4   1595    1918
Total:        122 1597  97.2   1597    1923

Percentage of the requests served within a certain time (ms)
  50%   1597
  66%   1612
  75%   1621
  80%   1629
  90%   1651
  95%   1678
  98%   1734
  99%   1769
 100%   1923 (longest request)

