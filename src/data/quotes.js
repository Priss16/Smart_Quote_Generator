// src/data/quotes.js
// Static dataset powering the whole app — no backend, no database.
// Each quote has a unique numeric id so favorites/history can reference it reliably.

const quotes = [
  // ---------- Motivation ----------
  { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { id: 2, text: "It always seems impossible until it's done.", author: "Nelson Mandela", category: "Motivation" },
  { id: 3, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { id: 4, text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "Motivation" },
  { id: 5, text: "The future depends on what you do today.", author: "Mahatma Gandhi", category: "Motivation" },
  { id: 6, text: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "Motivation" },
  { id: 7, text: "Great things never come from comfort zones.", author: "Unknown", category: "Motivation" },
  // ---------- Success ----------
  { id: 8, text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "Success" },
  { id: 9, text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis", category: "Success" },
  { id: 10, text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "Success" },
  { id: 11, text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", category: "Success" },
  { id: 12, text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "Success" },
  { id: 13, text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", category: "Success" },
  { id: 14, text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "Success" },
  // ---------- Life ----------
  { id: 15, text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "Life" },
  { id: 16, text: "In the end, it's not the years in your life that count, it's the life in your years.", author: "Abraham Lincoln", category: "Life" },
  { id: 17, text: "Life is really simple, but we insist on making it complicated.", author: "Confucius", category: "Life" },
  { id: 18, text: "The purpose of our lives is to be happy.", author: "Dalai Lama", category: "Life" },
  { id: 19, text: "Get busy living or get busy dying.", author: "Stephen King", category: "Life" },
  { id: 20, text: "You only live once, but if you do it right, once is enough.", author: "Mae West", category: "Life" },
  { id: 21, text: "Life is a flower of which love is the honey.", author: "Victor Hugo", category: "Life" },
  // ---------- Education ----------
  { id: 22, text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", category: "Education" },
  { id: 23, text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King", category: "Education" },
  { id: 24, text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin", category: "Education" },
  { id: 25, text: "Education is not preparation for life; education is life itself.", author: "John Dewey", category: "Education" },
  { id: 26, text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle", category: "Education" },
  { id: 27, text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi", category: "Education" },
  // ---------- Funny ----------
  { id: 28, text: "I'm not lazy, I'm on energy-saving mode.", author: "Unknown", category: "Funny" },
  { id: 29, text: "I used to think I was indecisive, but now I'm not so sure.", author: "Unknown", category: "Funny" },
  { id: 30, text: "The early bird can have the worm; I'll sleep in.", author: "Unknown", category: "Funny" },
  { id: 31, text: "I'm on a seafood diet. I see food and I eat it.", author: "Unknown", category: "Funny" },
  { id: 32, text: "My bed is a magical place where I suddenly remember everything I forgot to do.", author: "Unknown", category: "Funny" },
  { id: 33, text: "Common sense is like deodorant. The people who need it most never use it.", author: "Unknown", category: "Funny" },
  { id: 34, text: "I told my computer I needed a break, and it froze.", author: "Unknown", category: "Funny" },
  // ---------- Technology ----------
  { id: 35, text: "Technology is best when it brings people together.", author: "Matt Mullenweg", category: "Technology" },
  { id: 36, text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke", category: "Technology" },
  { id: 37, text: "The advance of technology is based on making it fit in so that you don't really even notice it.", author: "Bill Gates", category: "Technology" },
  { id: 38, text: "It has become appallingly obvious that our technology has exceeded our humanity.", author: "Albert Einstein", category: "Technology" },
  { id: 39, text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", category: "Technology" },
  { id: 40, text: "The science of today is the technology of tomorrow.", author: "Edward Teller", category: "Technology" },
];

export const categories = ["Motivation", "Success", "Life", "Education", "Funny", "Technology"];

export default quotes;
