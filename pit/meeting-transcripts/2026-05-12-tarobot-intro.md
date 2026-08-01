# jade@terribleturtle.com - Tue, 12 May 2026 15:07:14 MDT - Untitled

**Meeting Date:** 12th May, 2026 - 3:07 PM

---

**Zoom user** *[00:01]*: Jade, have you been able to find them? 
**Jade Clyne** *[00:06]*: Can you repeat that last part? The. 
**Daniel** *[00:08]*: My audio cut out. 
**Zoom user** *[00:09]*: Have you been able to find the robot? Fighting robots for sale? 
**Jade Clyne** *[00:14]*: I haven't been able to find them. 
**Zoom user** *[00:16]*: Okay. Anyways,. 
**Daniel** *[00:20]*: So why don't you tell me about your vision for this? I mean you obviously you have an idea for the. Like a fortune teller or. 
**Zoom user** *[00:27]*: Yeah, so our Burning man offering is going to be oracle tents and we're letting anybody do an oracle tent that. Who wants to do it. But it does. We were. It does need to be AI driven, so you could use screens, you could use a robot arm if you want. You could do whatever you wanted. But I was actually hoping to get a little robot and then teach it to do shamanic dancing and roll like, or like roll bones and stuff and do bone readings or something. And you know, I saw them program the fighting robots and the software was shit. And on the day of the fight, it broke. However, Nvidia has released Sonic open source which works with Unitree. And you can do, you can train it through your human movements. 
**Zoom user** *[01:18]*: So you just, it just tracks all your movements and translates it into the robot's movements. And it's open source and it seems very promising. Like we could probably do this however, you know, it's hard to know. It's like it works with unitree, but I don't know about any of these other robots, you know. 
**Daniel** *[01:34]*: Yeah, yeah. Okay. So what about the kind of humanoid aspect? Obviously the shamanic dance and having that, you know, you would need something that was humanoid or. 
**Zoom user** *[01:45]*: Well, it's eye popping, right. If we had. Are you familiar, you're familiar with Burning Man? 
**Daniel** *[01:50]*: Yeah. 
**Zoom user** *[01:51]*: Oh yeah. I mean, you had a robot also just running around cleaning up trash as well, which is pretty eye catching. So, you know, having a humanoid robot is pretty cool, I think. 
**Daniel** *[02:03]*: But okay. Yeah, I imagine the environment is interesting also. I mean, R2D2 is, you know, successful in the desert, but I'm not so sure about a lot of these modern humanoids do. I think that's going to be. It's going to be a big challenge, you know, just getting sand into joints and things like that. You know, you can gum that up pretty quickly. So, you know, I would see if there's something available that either, you know, there's a kit or a robot that's more mitigating for that type of thing. 
**Zoom user** *[02:36]*: Right. 
**Daniel** *[02:38]*: You know, those type of seals and dealing with those conditions I would expect with. 
**Zoom user** *[02:43]*: Yeah, but yeah, I mean your Robot's a lot of fun. It looks like it does. It appears to just have a moving head. 
**Daniel** *[02:52]*: Yeah, it's a head and it's a body. Actually have the guy here. Oh yeah, he's half dressed up. It's not the full dress, which actually might better for. 
**Zoom user** *[03:07]*: You got up,. 
**Daniel** *[03:08]*: You know, so we've got them, we've got kind of like this little dune. 
**Zoom user** *[03:13]*: Oh, there we go. Yeah. 
**Daniel** *[03:15]*: Kind of headdress. But the, so the head is, you know, full motion. You can, you know, you can imagine, you know, having it, the body turns as well. But there's, you know, any type of physical interaction, any manipulation, you would have a, you know, a separate arm that you would add in and then there's no locomotion. It's not, you know, it doesn't have legs or wheels or anything like that. I mean you can imagine creating platforms to do that or adding it. 
**Zoom user** *[03:43]*: So how was yours dishing out sacred truth? 
**Daniel** *[03:48]*: Yeah, so he. It has, you know, speaker and microphone and camera. So it has full interaction. You know, the easiest way to think about robots that are three separate system. So the versus manipulation interaction versus mobility. This has no mobility. It has no manipulation, but it's full conversational, fully interactive. It has some light movements so you can add in some body language if you will. It's adorable. It has little antennas. 
**Zoom user** *[04:20]*: What do you, what are you using for the back end? 
**Daniel** *[04:23]*: So this, there's a few different real time APIs. So OpenAI offers that. Google has some. We've put together custom pipelines using our own voices with 11 labs and Cartesia and that kind of thing. 
**Zoom user** *[04:39]*: Yeah. And Jack OpenAI just released a new real time conversation engine, right? 
**Daniel** *[04:49]*: Yes. So we had been using real time preview for a while so we know what that interaction is like. It's very cool. Yeah. 
**Zoom user** *[04:56]*: And, and I guess the other question is how much money does it take to run? 
**Daniel** *[05:03]*: You know, it's, it kind of depends what you're looking for. You know, in this case, we had hugging face sponsored this for us so, you know, we didn't have to foot the bill. But you know, imagine, you know, for a high, you know, heavy interaction, highly interactive, constant back and forth, no breaks, that kind of thing. You know, you're looking at, you know, probably a high water mark of something like $100 a day. 
**Zoom user** *[05:32]*: What if you imagined people seeking Oracle 20, you know, 24 7, like during the week of Burning man. Is that like $100 an hour. A hundred dollars a day. 
**Daniel** *[05:46]*: You know, I'd have to learn a little bit more about the specifics. But if you're talking 24 7, you know, harsh environment, I mean, just to put a figure on it, I mean, you know, ballpark of something like $100 an hour is probably getting into the territory for the whole package, but. 
**Zoom user** *[06:04]*: For the whole package. Okay. Yeah, but, yeah, but the conversational stuff itself wouldn't be too expensive, huh? 
**Daniel** *[06:12]*: No, it's, you know, I mean, you're, you know, I think tens of dollars per hour would be. And you know, a wildly. 
**Zoom user** *[06:20]*: Well, that's pretty cool. That's pretty cool. So I was actually already, I was kind of thinking of straying away from anything that I needed AI or connectivity for and using, you know, like somebody, a server somewhere else. I thought it'd just be too much processing. I was gonna, and I was kind of shying away from conversation as well just because, like, I didn't know if that. Yeah, just because I was like, I wanted at least one of the Oracles to run like all day, all night, you know, and so, but if it's really not that expensive to do a conversational AI, that's pretty cool. 
**Daniel** *[06:58]*: Yeah, I think the bigger challenge that you're going to have is connectivity and I'd probably steer you more towards a local server so you have high power compute available locally that can do everything offline that you need it to do, so you don't rely on an external connection. 
**Zoom user** *[07:16]*: Well, we do have the Starlink. We can get a backup Starlink and it's never gone down as far as I. Well, we did get blocked out once, but then of course nobody's going to be in the Oracle tent unless they're hiding. 
**Jade Clyne** *[07:31]*: Potentially issues of latency if we do use Starlink. So using local,. 
**Zoom user** *[07:40]*: I mean, that's the whole reason OpenAI released the new conversational model is just because it's not even latency. It's just, you know, AI has like, traditionally these things have problems with being talked over and still speaking as they're being talked over and then stopping like oddly late in their conversation, you know, to, to relisten to what was said, you know, but the latency with Starlink, I mean you can play multiplayer online games with this. So. 
**Daniel** *[08:13]*: Yeah, it'd be worth exploring. You know, we'd want to get Some real measurements on it. We just did an event and you know, we found out that when more than roughly 30 people joined in that particular session, you know, we would see the latency could be two to three seconds, which for a conversation is a deal breaker. That's pure Internet. That's a pure connectivity concern. That said, there's a lot of edge compute that's coming online today and models that are available today where I think you could recreate that real time API local, which probably would make more sense for this, especially given the timeline and the availability. 
**Zoom user** *[08:57]*: Now that would be super impressive to have like a real time AI with a conversation that feels like you're talking to a human. Now that would be mind blowing for most people who have probably not done anything outside of talk to one of Gro. Stupid little bots. 
**Jade Clyne** *[09:14]*: Yeah, I think so. Just so you know, Jake and I are working on an MVP where we're focused on the cognitive side right now of, you know, picking an open source LLM that we can use so that we can reduce the latency and make it, you know, as conversational as possible. 
**Zoom user** *[09:40]*: Right. Well, if we need, and we, if we need hardware for that too, we might have to order it asap because I, I think my Mac Mini was like two months or something. Yeah, I don't know if that's improved at all. 
**Daniel** *[09:52]*: I haven't explored a lot on the Mac Mini. I don't know what the memory bandwidth is on the new ones, but my guess with, you know, don't, don't hold me to this, you know, we need to get our hands on kind of thing. But you know, my guess is something like a Mac Mini is probably around the entry point for what you'd be looking for and that we could do that. Right. It's probably more technically challenging just to put together like the benefit of the real time API is just does everything. You don't have to do speech to text. You don't have to do speech. You don't have to bring in a voice model. It's multimodal. Right. But all of that is capable, the capacity is there to do all of that through additional models. 
**Daniel** *[10:32]*: You just have to string together your own pipeline, which is more technically challenging, but it opens the door to do everything locally. 
**Zoom user** *[10:39]*: I don't know anybody actually using Gemini, but the people talking about the, that little small one that they released is like they're mind blown. You know, it's such a small footprint and small GPU needs, you know, so, you know, there's definitely open source stuff that we can use. Oh, did you guys freeze? Damn, my Internet sucks. 
**Jade Clyne** *[11:09]*: I am still available. 
**Zoom user** *[11:11]*: Oh, okay. What Daniel is there was some kind of weird cell outage today as well that was causing problems for people. And then my Internet always sucks. I'm only getting like. I'm only getting like 15 megabytes or some shit. 
**Jade Clyne** *[11:31]*: Yeah, I think there were some issues here with the Internet as well. I wonder if it's like. 
**Zoom user** *[11:35]*: It's probably some kind of AI attack. 
**Jade Clyne** *[11:38]*: I think it's an AI attack. 
**Zoom user** *[11:41]*: I'm gonna hook up my starlink. I'm gonna try to hook up my Starlink. I was. I meant to do it this morning, but I got lazy. 
**Daniel** *[11:49]*: All right. 
**Zoom user** *[11:49]*: Where did he go? Is he trying to get back in? 
**Jade Clyne** *[11:53]*: I think so. Potentially. 
**Zoom user** *[12:08]*: Oh, I have. I have Nick coming over today. He's gonna help me. He's, you know, he's the guy that's going to beam the 2 gigabyte Internet down from the mountains for me. 
**Jade Clyne** *[12:16]*: Oh, nice. 
**Zoom user** *[12:18]*: And we're going to talk about my whole system and security and stuff like that. 
**Jade Clyne** *[12:25]*: Sweet. 
**Zoom user** *[12:28]*: Okay, I'm just gonna. I'm just gonna try to put this thing out here, but it might be too close to the house. Oh, I'm gonna have to get. I'm gonna have to get an outdoor cord. You know what? I'll just take this out. Okay. 
**Daniel** *[12:46]*: All right. Perfect timing. 
**Zoom user** *[12:47]*: There we go. So you're having Internet problems now. Apparently people were having cell problems as well. So I think there might be some kind of really major disruption happening right now. 
**Daniel** *[13:01]*: Oh, man. I mean, I think anything's possible these days. 
**Zoom user** *[13:06]*: Yeah, right. 
**Daniel** *[13:07]*: Let's say when a website goes down, I have to wonder, is it because of some infrastructure problem or they're under attack, or who knows? 
**Zoom user** *[13:16]*: Yeah, I know. Well, the number of security flaws they found with the Internet is just insane since AI has been looking. 
**Daniel** *[13:29]*: Yeah, you mentioned Gemini. We just won a hackathon using that for robotics for an unrelated project. And it is wildly powerful given its size. The new Gemini 4 models, really impressive stuff, but the list goes on. I mean, when you're building your own pipeline, you can put together seven different models if you want as part of that workflow. And as long as you're sorry, local compute, you can handle the bandwidth. It's no problem. 
**Zoom user** *[13:59]*: Sweet. Yeah. Yeah. So, I mean, I think, you know, for my own thing, we've just been trying to find a robot because I really wanted a human robot for my oracle tent. Jade and Jake are working on their own creation. Are you still there? 
**Daniel** *[14:21]*: Yep. 
**Zoom user** *[14:21]*: Okay. And I'm not really sure what that looks like, but I don't. Do you have any interest in us doing Oracle using yours for an Oracle tent? 
**Daniel** *[14:34]*: Yeah, it's absolutely something. I think that does make sense. We, we did at Boulder Startup Week, the Oracle and it was a little better when tent that you would go into and it knew the knowledge of the attendees so people could submit things to the Oracle and then you would go have the conversation with the Oracle and it knew information that people had submitted. 
**Jade Clyne** *[14:58]*: Yeah. 
**Zoom user** *[14:59]*: We had floated the idea of having QR codes for people who could put in their social media if they wanted to. Right. 
**Daniel** *[15:09]*: You could do that. You can extract from that real time conversation. So you can keep, you know, when somebody could say, hey, will you tell the next person something or whatever it is. Right. You can build memory in and that it's all possible, you know, it just really matters, you know, more about honing in on that vision and you know, what kind of budget exists for the hardware and the different things that you're trying to do. 
**Zoom user** *[15:34]*: Would you want us, given the timeline. 
**Daniel** *[15:36]*: Yeah. 
**Zoom user** *[15:36]*: Would you want us to duplicate your project or rent your project or would you want to come along and do the Oracle tent at Burning Man? 
**Daniel** *[15:50]*: You know, it's, I would say it's all in the realm of possibility. Okay. You know, I just, I'd need to know a little bit more about what each of the options looks like, but. 
**Zoom user** *[15:58]*: Oh, you're at, you're at the. Are you, what are you doing at the university? 
**Daniel** *[16:03]*: Well, I work with a few different groups. I've, I've guest lectured at some courses at cu, but I don't have a formal relationship or anything. 
**Zoom user** *[16:12]*: Well, this. So traditionally Burning Man's been really hard for teachers to get to because it's usually starts like August 23rd. It's the last week of August. But this week, this year is even more difficult because it's actually the last two days of August into Sept. The first week of September. So I even, I think even the people and the students who manage to like skip the first days of class and go anyways. But like I think this year is going to be just impossible because it's like pretty much the first week of September. So I didn't, I just didn't know if you had any conflicts there. 
**Daniel** *[16:49]*: Not immediately. You know, it's, you know, I could certainly see it Being something that get me out there and being there to manage it and everything else could be nice. You wouldn't have to set it up or make sure it worked or anything like that. And timing wise, we're only at May, so it's enough time to get the hardware set up, get everything ready for the environment, pre configure it, make sure it does what you want it to do. Frankly, I would predict that we're going to have more models that are related to this coming out that would improve the experience. So I could imagine stringing together some very creative things. I mean, Gemini, for example, you mentioned Gemaphore. That is already multimodal, which is insane. 
**Daniel** *[17:37]*: To have a few tens of gigabytes of a system that can interpret vision and audio and everything and respond to that. I mean, that's really wild stuff. So, yeah, I don't want to say the sky's the limit, but I can easily imagine getting very creative with the vision for this and envisioning that character and bringing it to reality. 
**Zoom user** *[17:59]*: Well, for us, I mean, yeah, bringing you out the Burning man would be the best option because then hopefully you could also help us consult and debug any problems we have with the other Oracles. But yeah, it just depends whether or not you wanted to do that. If you didn't want to do that, then we could talk about the other routes as well. 
**Daniel** *[18:20]*: Yeah, I mean, you know, it really, it just would depend on scope and, you know, how much was involved. It'd be, you know, I, I, I, I'd have to learn about, you know, obviously what all the other oracles are and everything. But yeah, I'd be, I guess, like a tech roadie kind of thing. 
**Zoom user** *[18:37]*: Well, yeah, so the way that Burning Man. Have you been to Burning Man? 
**Daniel** *[18:41]*: I haven't, but I've got a lot of plans that I've got. 
**Zoom user** *[18:43]*: Yeah, you know, the way it works is that, you know, you can contribute, you contribute to your camp and then you contribute to the playa. And so the as a camp, we have to prioritize people who are going to contribute to the camp as the highest priority and then people who are giving to the playa. Right. And then everyone else hopefully is doing something to support the camp. Like, you know, dinner, there's dinner. We have dinner. And you know, there's cleanup and there's like setup and take down and all that stuff. So it's like, it's quite a big thing, right, to set up this whole city based on, you know, just people doing stuff. 
**Daniel** *[19:25]*: Wild. That's cool. I think the. Yeah, I mean, our Dune inspired, you know, Matrix mystic, you know, with an oracle vibes and everything, is. I get it, because it's. You know, it's. It's what we did, and I kind of imagined it in a Bedouin tent somewhere, and Burning man seems like a good fit for sure. 
**Zoom user** *[19:47]*: Yeah. Another. I think another fun thing would be, is hermits, because, you know, like, in the 1800s, they had garden hermits where they'd hire, like, these philosophers to live in the garden. People would walk in the garden and then just watch the philosopher, and sometimes he would give them little lectures about philosophy. I really. You should look it up. It's pretty funny. There's a. There's a couple documentaries about it. And so I thought it'd be really funny also to have, like, an AI Hermit as well. 
**Daniel** *[20:20]*: There you go. Wow. I'm not familiar with that, but I think I get the vibe. 
**Zoom user** *[20:24]*: Yeah, yeah, yeah. Guy. I think you probably look up on YouTube, like, garden hermits, philosophers, or something. 
**Daniel** *[20:30]*: Okay. It's pretty funny that we might know. 
**Zoom user** *[20:35]*: I think there was a really rude one, and I think they finally had him, like, assassinated or something, but I can't remember. Maybe I'm getting that. 
**Daniel** *[20:44]*: We had a competition where we built a robot that was a friendly chef, but we thought, that's no fun. It should be Gordon Ramsey giving you hell. Like, you're on Hell's Kitchen, so, you know, hell, yeah. Our philosopher could be whatever. Whatever character you need, you know? 
**Zoom user** *[21:00]*: Yeah, Gordon was hilarious, man. I don't know where he came up with all that stuff. You can probably. Yeah. Have somebody have IT analyze all the kitchen nightmare stuff and all the. All the Hell's Kitchen stuff, and then have an AI Ramsey. That'd be great. 
**Daniel** *[21:16]*: There you go. 
**Zoom user** *[21:18]*: All right, well, thank you for talking with us. And then we'll start an email chain and see which direction we'd like to go in. And then at the end of this month, we're having a little party like, 10 minutes north of nobo, and I have about 300 acres there. 
**Daniel** *[21:31]*: Oh, cool. 
**Zoom user** *[21:33]*: Might even want to go ahead and set up a little oracle thing there. That'd be fun. 
**Daniel** *[21:36]*: Oh, man. We could do an Oracle preview. 
**Zoom user** *[21:39]*: Yeah, we could do Oracle preview. That'd be great. 
**Jade Clyne** *[21:41]*: Yeah. 
**Zoom user** *[21:42]*: And we need to take. And we need. I think. Is it the 30th? No, 29th. 28Th. 
**Daniel** *[21:48]*: 30Th. 
**Zoom user** *[21:49]*: 30Th. Okay. 
**Jade Clyne** *[21:51]*: Yeah. 
**Zoom user** *[21:51]*: May 30th. 
**Jade Clyne** *[21:52]*: I'll send you the details. Daniel. 
**Zoom user** *[21:54]*: Yeah, she'll send you the invite as well after we start the email thread. So. 
**Jade Clyne** *[21:58]*: All right. 
**Zoom user** *[21:59]*: Thank you very much for your time. 
**Daniel** *[22:03]*: Absolutely. It's great to meet you. Yeah. 
**Zoom user** *[22:05]*: Nice to meet you. Talk to you later. 
**Daniel** *[22:07]*: Email you Right. 
**Jade Clyne** *[22:08]*: Awesome. Thanks everyone. 
**Daniel** *[22:10]*: Search for calendars. You just have to know that exactly. Okay guys, you might be able to see it. 
**Jade Clyne** *[22:19]*: Oh sorry. 
**Daniel** *[22:20]*: What was that busy though that one in particular so you might not want to keep it active always but it's nice to like have it in your side panel like favorites to the find it easily but yeah it's. 
**Jade Clyne** *[22:34]*: Are you there, Daniel? Okay, I can't hear you. I wonder if it's a connection issue. 
**Daniel** *[23:01]*: Hello? 
**Jade Clyne** *[23:02]*: Hello? Okay well just in case you can hear me, I will set up a email link or email chain with you and Jeremy and just get the ball rolling on some robot stuff it. Okay Sweet. All right. Peace out, gangster. 
