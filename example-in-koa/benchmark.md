ab -n 10000 -c 100 "http://localhost:8000/?a=109834567&b=98767500"

Server Software:        
Server Hostname:        localhost
Server Port:            8001

Document Path:          /?a=109834567&b=98767500
Document Length:        17 bytes

Concurrency Level:      100
Time taken for tests:   939.806 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      1590000 bytes
HTML transferred:       170000 bytes
Requests per second:    10.64 [#/sec] (mean)
Time per request:       9398.058 [ms] (mean)
Time per request:       93.981 [ms] (mean, across all concurrent requests)
Transfer rate:          1.65 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    6   2.4      6       8
Processing:   121 9379 417.0   9283   11243
Waiting:       97 5680 2516.7   5834   11138
Total:        121 9384 416.7   9289   11244

Percentage of the requests served within a certain time (ms)
  50%   9289
  66%   9305
  75%   9334
  80%   9365
  90%   9841
  95%   9910
  98%  10102
  99%  10760
 100%  11244 (longest request)