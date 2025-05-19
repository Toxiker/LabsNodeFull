import app from './app.js';
import { PORT } from './common/config.js';
import { logger } from './common/logger.js';
process.on('uncaughtException', (err) => {
    logger.error(`Uncaught Exception: ${err.stack || err.message}`);
    setTimeout(() => process.exit(1), 500);
});
process.on('unhandledRejection', (reason) => {
    logger.error(`Unhandled Rejection: ${reason}`);
    setTimeout(() => process.exit(1), 500);
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map