#!/usr/bin/env bash
# TET Paper 2A CBT Portal Launcher

PORT=8080
DIR="$(cd "$(dirname "$0")/app" && pwd)"

echo "========================================================"
echo "🎓 TET Paper 2A CBT Assessment Portal"
echo "Covering 2,699 Practice Questions with Official Keys"
echo "Bilingual: English & Telugu (ద్విభాష)"
echo "========================================================"
echo "Starting local server at http://localhost:$PORT ..."

# Check if port 8080 is already in use
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo "Server is already running on http://localhost:$PORT"
else
    python3 -m http.server $PORT --directory "$DIR" &
    SERVER_PID=$!
    echo "Server running with PID $SERVER_PID"
fi

# Open in default browser
if command -v open > /dev/null; then
    open "http://localhost:$PORT"
elif command -v xdg-open > /dev/null; then
    xdg-open "http://localhost:$PORT"
fi

echo "Portal is live at: http://localhost:$PORT"
