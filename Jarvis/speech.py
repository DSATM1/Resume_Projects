import speech_recognition as sr
import pyttsx3


def speak(text: str) -> None:
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()


def listen() -> str:
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source, duration=0.5)
        try:
            audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
        except sr.WaitTimeoutError:
            print("No speech detected.")
            return ""

    try:
        text = recognizer.recognize_google(audio)
        print(f"You said: {text}")
        return text
    except sr.UnknownValueError:
        print("Sorry, I could not understand what you said.")
        return ""
    except sr.RequestError as e:
        print(f"Could not request results; {e}")
        return ""


if __name__ == "__main__":
    try:
        while True:
            command = listen()
            if command:
                speak(command)
            else:
                speak("I could not understand that.")
    except KeyboardInterrupt:
        print("\nGoodbye!")
