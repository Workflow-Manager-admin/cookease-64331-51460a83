#!/bin/bash
cd /home/kavia/workspace/code-generation/cookease-64331-51460a83/cookease
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

