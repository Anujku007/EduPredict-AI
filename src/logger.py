import logging
import os
from datetime import datetime

LOG_FILE = f"{datetime.now().strftime('%m_%d_%Y_%H_%M_%S')}.log"

# Use /tmp on Vercel (read-only filesystem elsewhere), local "logs" folder otherwise
if os.environ.get("VERCEL"):
    logs_path = "/tmp/logs"
else:
    logs_path = os.path.join(os.getcwd(), "logs")

os.makedirs(logs_path, exist_ok=True)
LOG_FILE_PATH = os.path.join(logs_path, LOG_FILE)

logging.basicConfig(
    filename=LOG_FILE_PATH,
    format="[ %(asctime)s ] %(lineno)d %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)