import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Suhan Grover",
    role: "Lead Developer",
    bio: "Passionate about turning yesterday's weather into today's most accurate forecasts.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "suhan@yesterweather.example.com"
    }
  },
  {
    name: "Namish Oberoi",
    role: "Weather Data Specialist",
    bio: "Specializes in historical weather patterns and making sure our yesterday data is perfect.",
    social: {
      github: "#",
      linkedin: "#",
      email: "namish@yesterweather.example.com"
    }
  },
  {
    name: "Advaith Sai",
    role: "UX Designer",
    bio: "Creates the beautiful, intuitive interfaces that make checking yesterday's weather a joy.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "advaith@yesterweather.example.com"
    }
  }
];

export default function Team() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 pt-24">
      <div className="glass-card rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Meet Our Team</h1>
          <p className="text-white/80 italic text-lg">The experts behind yesterday's perfect weather reports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass rounded-2xl p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-white/80 text-sm mb-3">{member.role}</p>
              <p className="text-white/70 text-sm mb-4">{member.bio}</p>
              
              <div className="flex gap-3 text-white/60">
                {member.social.twitter && (
                  <a href={member.social.twitter} className="hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.email && (
                  <a href={`mailto:${member.social.email}`} className="hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}