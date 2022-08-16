#!/usr/bin/env bash

seq 1 16 | while read num;do
  curl -s -L -X POST https://resize-image-npwfbftieq-an.a.run.app/300/1200/560 -F upload_file=@item-$num.png >$num.json;
  cat $num.json | jq -r '.message.raw.base64' | base64 -d  >$num-$(cat $num.json | jq -r '.message.output.fileName');
  sleep 0.1;
done

rm *json
