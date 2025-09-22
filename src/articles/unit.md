# Learning Unit Testing in Java with JUnit

Over the last few years working as a software engineer, one of the biggest lessons I’ve learned is this: **writing code is not enough**. Making sure that the code works today and will continue to work tomorrow is just as important. That’s why testing has become such a natural part of my daily workflow. And in the Java world, the tool I personally trust the most is **JUnit**.

In this post, I want to share my own perspective on JUnit—what it is, why I use it, and how I apply it in real projects. Hopefully, this will help anyone who’s just starting out with testing in Java or simply looking to strengthen their approach.

---

## Why I Care About Testing

I’ll be honest: when I first started coding, I thought testing was kind of optional. I used to run my code manually, click through the UI, or print out debug messages to see if things worked. That might be fine for small projects, but as soon as things grow, this approach breaks down.

Tests changed the way I write software. With JUnit:

- I can **refactor with confidence**, knowing that existing functionality won’t suddenly break.
- I can **catch regressions early** instead of waiting for users (or worse—clients) to report them.
- I save myself a ton of time in the long run. Writing a test once often saves me hours of debugging later.

---

## What is JUnit?

JUnit is a **unit testing framework** for Java. Basically, it helps me check if a specific piece of code (a class or a method) works as expected. I don’t need to run the whole application—just the part I’m testing.

It’s lightweight, integrates perfectly with Maven/Gradle and Spring Boot, and most importantly, it’s simple. I don’t want testing to feel like a separate complicated task. With JUnit, it feels natural.

---

## A Simple Example

Here’s a small example from one of my practice projects—a very simple calculator:

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int divide(int a, int b) {
        if (b == 0) throw new IllegalArgumentException("Cannot divide by zero!");
        return a / b;
    }
}
```
