class Logger:
    def log(self, message, output_type):
        if output_type == "console":
            self.log_to_console(message)
        elif output_type == "file":
            self.log_to_file(message)

    def log_to_console(self, message):
        print(f"[Console] {message}")

    def log_to_file(self, message):
        with open("log.txt", "a") as file:
            file.write(f"[File] {message}\n")


# Example usage:
logger = Logger()
logger.log("This is a log message", "console")
logger.log("This is a log message for the file", "file")