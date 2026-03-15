export function createViews() {
    return `
        ${createHomeView()}
        ${createDashboardView()}
        ${createDiscoverView()}
        ${createProposalsView()}
        ${createMessagesView()}
        ${createProfileView()}
    `;
}

function createHomeView() {
    return `
        <section id="view-home" class="view-section active">
            <div class="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-2xl shadow-indigo-100/50 mb-8">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.45),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.25),_transparent_30%)]"></div>
                <div class="relative grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-10 p-8 md:p-12">
                    <div class="space-y-8">
                        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-indigo-200">Professional sponsorship infrastructure for community sport</div>
                        <div>
                            <h1 class="text-4xl md:text-5xl xl:text-6xl font-extrabold font-display leading-[1.02] tracking-tight max-w-4xl">SponsorSync turns local sponsorship into a measurable partnership channel.</h1>
                            <p class="mt-6 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">Built around the README story: give volunteer club directors a system that just works, help local businesses launch creative activations, and prove value with reporting that makes renewals easier.</p>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <button data-action="navigate" data-view="dashboard" class="bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-all shadow-lg shadow-slate-950/20">Explore Dashboard</button>
                            <button data-action="navigate" data-view="discover" class="border border-white/15 bg-white/5 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-all">Browse Sponsor Matches</button>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            ${homeStat('Churn challenge', '80%', 'Sponsor loss happens when clubs cannot show measurable value.')}
                            ${homeStat('Admin time saved', '15+ hrs', 'Automation removes logo chasing, proposal formatting, and follow-up.')}
                            ${homeStat('Season value tracked', '$24.8k', 'Projected package revenue across six active partners.')}
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                            <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80" alt="Amateur football team celebrating after a match" class="h-[280px] md:h-[360px] w-full rounded-[1.35rem] object-cover shadow-xl shadow-slate-950/30">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="rounded-3xl border border-white/10 bg-white/5 p-5"><p class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Live activation</p><h2 class="mt-3 text-xl font-display font-bold">Halftime Hero</h2><p class="mt-2 text-sm text-slate-300">Harbor Fitness sponsors recovery content, warm-up access, and post-match QR offers.</p></div>
                            <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-emerald-400/10 p-5"><p class="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">ROI signal</p><p class="mt-3 text-3xl font-display font-extrabold">4.7x</p><p class="mt-2 text-sm text-slate-300">Average engagement lift vs. static signage-only packages.</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="grid grid-cols-1 xl:grid-cols-[0.92fr_1.08fr] gap-8 mb-8">
                <div class="glass-card rounded-[2rem] p-8 shadow-sm">
                    <p class="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 mb-3">Why SponsorSync exists</p>
                    <h2 class="text-3xl font-display font-extrabold text-slate-900 mb-4">The bridge between overwhelmed clubs and ROI-minded local businesses.</h2>
                    <p class="text-slate-600 leading-relaxed mb-6">Amateur clubs are usually run by parents and volunteers, not sponsorship operators. SponsorSync reframes the relationship from charity and logo placement to partnership and measurable digital activation.</p>
                    <div class="space-y-4">
                        <div class="rounded-2xl bg-slate-50 border border-slate-200 p-5"><p class="text-sm font-bold text-slate-900">Self-serve sponsor proposals</p><p class="mt-2 text-sm text-slate-600">Businesses can pitch campaign ideas directly instead of sending vague asks through email threads.</p></div>
                        <div class="rounded-2xl bg-slate-50 border border-slate-200 p-5"><p class="text-sm font-bold text-slate-900">Automated fulfillment and reporting</p><p class="mt-2 text-sm text-slate-600">Coupons, social mentions, newsletters, and season recap metrics are coordinated in one place.</p></div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    ${featureCard('dashboard', 'Dashboard', 'Surface season performance, active pitches, renewal status, and sponsor pipeline health.', 'M4 13h6V5H4v8zm10 6h6V5h-6v14zM4 19h6v-2H4v2zm0-6h6v-2H4v2zm10 6h6v-2h-6v2z', 'indigo')}
                    ${featureCard('discover', 'Discover', 'Match clubs with local businesses based on geography, audience fit, and activation potential.', 'M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z', 'emerald')}
                    ${featureCard('proposals', 'Proposals', 'Package creative activations that turn sponsorship into something a business can measure.', 'M12 6v6l4 2m6-2A10 10 0 1112 2a10 10 0 0110 10z', 'amber')}
                </div>
            </section>

            <section class="mb-8">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div><p class="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 mb-2">Featured sponsorship deals</p><h2 class="text-3xl font-display font-extrabold text-slate-900">Made-up packages that show how the platform sells value.</h2></div>
                    <p class="text-sm text-slate-500 max-w-xl">These fictional packages make the prototype feel commercially real while staying aligned with the product story in the README.</p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    ${dealCard('https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=80', 'Pizza being served at a restaurant', 'Food and beverage', '$4,500 / season', 'Clean Sheet Supper Series', 'Luigi\\'s Pizzeria backs every home clean sheet with a QR coupon, newsletter placement, and branded player interview segment.', '220 redemptions', 'Sleeve logo + socials', 'rose')}
                    ${dealCard('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80', 'Gym equipment in a modern fitness studio', 'Health and fitness', '$7,200 / season', 'Player of the Week Recovery Partner', 'Harbor Fitness funds weekly MVP content, a branded youth clinic, and post-match lead capture through recovery session giveaways.', '140 leads', 'Reels + clinics', 'emerald')}
                    ${dealCard('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', 'Professional office workspace', 'Professional services', '$5,800 / season', 'Community Matchday Hub', 'North Harbor Accounting owns the digital match bulletin, giveaway entry form, and year-end sponsor recap report.', '18k impressions', 'Newsletter + report', 'indigo')}
                </div>
            </section>

            <section class="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8 mb-8">
                <div class="glass-card rounded-[2rem] p-8 shadow-sm">
                    <div class="flex items-center justify-between gap-4 mb-6">
                        <div><p class="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 mb-2">Feature walkthrough</p><h2 class="text-3xl font-display font-extrabold text-slate-900">Five modules, one clean sponsorship workflow.</h2></div>
                        <button data-action="navigate" data-view="messages" class="hidden md:inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-600 transition-all">Open inbox</button>
                    </div>
                    <div class="space-y-4">
                        ${walkthroughRow('Dashboard', 'An executive view of audience reach, active pitches, sponsor responses, and revenue momentum.', 'dashboard')}
                        ${walkthroughRow('Discover Sponsors', 'Find nearby businesses likely to benefit from local visibility and measurable engagement.', 'discover')}
                        ${walkthroughRow('Creative Proposals', 'Turn generic asks into activations like coupons, clinics, halftime perks, and family offers.', 'proposals')}
                        ${walkthroughRow('Messages', 'Keep negotiation, approvals, and mockup feedback in one place instead of scattered email chains.', 'messages')}
                        ${walkthroughRow('Media Kit', 'Package the club story, audience metrics, and inventory into a polished sponsor-facing presentation.', 'profile')}
                    </div>
                </div>
                <div class="space-y-6">
                    <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"><img src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=1200&q=80" alt="Coach speaking with youth players at training" class="h-72 w-full object-cover"><div class="p-6"><p class="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-2">Community-first positioning</p><h3 class="text-xl font-display font-bold text-slate-900">Professional enough for sponsors, approachable enough for volunteers.</h3><p class="mt-3 text-sm text-slate-600 leading-relaxed">The page now shows the product as a serious business tool without losing the community sport identity.</p></div></div>
                    <div class="glass-card rounded-[2rem] p-6 shadow-sm"><p class="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-3">Sample season outcome</p><div class="grid grid-cols-2 gap-4">${metricTile('Closed partners', '6', 'emerald')}${metricTile('Reach tracked', '42k', 'indigo')}${metricTile('Offers redeemed', '918', 'amber')}${metricTile('Renewal rate', '83%', 'slate')}</div></div>
                </div>
            </section>
        </section>
    `;
}

function createDashboardView() {
    return `
        <section id="view-dashboard" class="view-section">
            <header class="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div><h1 class="text-3xl font-extrabold font-display text-slate-900">Dashboard</h1><p class="text-slate-500 mt-1 italic">Welcome back, Westside FC. SponsorSync keeps sponsorship operations measurable and renewal-ready.</p></div>
                <div class="glass-card rounded-2xl px-5 py-4"><p class="text-[10px] uppercase tracking-[0.18em] font-bold text-slate-400">Season target</p><p class="mt-1 text-lg font-display font-extrabold text-slate-900">$30,000 in sponsor value</p></div>
            </header>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                ${dashboardMetric('Profile Reach', '42,180', '+12% this week')}
                ${dashboardMetric('Active Pitches', '8', '3 awaiting response', true)}
                <div class="bg-indigo-600 p-6 rounded-2xl shadow-xl shadow-indigo-100 text-white"><p class="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">Pending Offers</p><p class="text-3xl font-extrabold font-display">2</p><span class="text-indigo-100 text-xs mt-2 inline-block">Review required</span></div>
                ${dashboardMetric('Projected Revenue', '$24.8k', '83% to goal')}
            </div>
            <div class="glass-card rounded-2xl overflow-hidden shadow-sm">
                <div class="px-8 py-5 border-b border-slate-100 flex justify-between items-center bg-white/50"><div><h2 class="text-lg font-bold font-display text-slate-900">Recent Activity</h2><p class="text-sm text-slate-500 mt-1">The dashboard is the operating layer for club directors who need fast context.</p></div><button data-action="navigate" data-view="messages" class="text-xs font-bold text-indigo-600 hover:underline tracking-widest uppercase">View All</button></div>
                <ul class="divide-y divide-slate-100">
                    <li class="px-8 py-5 hover:bg-white/80 transition-all flex items-center justify-between"><div><p class="text-sm font-bold text-slate-900">Luigi's Pizzeria approved the Clean Sheet Supper Series creative.</p><p class="text-xs text-slate-500 mt-1 italic">The sponsor accepted coupon placement and newsletter coverage.</p></div><span class="text-[10px] font-bold text-slate-400 uppercase">2h ago</span></li>
                    <li class="px-8 py-5 hover:bg-white/80 transition-all flex items-center justify-between"><div><p class="text-sm font-bold text-slate-900">Harbor Fitness requested a revised clinic package.</p><p class="text-xs text-slate-500 mt-1 italic">They want a stronger lead capture CTA in the final proposal.</p></div><span class="text-[10px] font-bold text-slate-400 uppercase">Yesterday</span></li>
                </ul>
            </div>
        </section>
    `;
}

function createDiscoverView() {
    return `
        <section id="view-discover" class="view-section">
            <header class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div><h1 class="text-3xl font-extrabold font-display text-slate-900">Discover Sponsors</h1><p class="text-slate-500 mt-1">Matched brands based on audience profile, location, and activation fit.</p></div>
                <div class="flex space-x-3"><select class="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"><option>All Categories</option></select><select class="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"><option>Within 10 Miles</option></select></div>
            </header>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                ${discoverCard('https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1000&q=80', 'Restaurant interior', 'Luigi\\'s Pizzeria', 'Local Business - 2.1 mi', '95% MATCH', 'Looking for jersey visibility, fan coupon redemption, and recurring matchday digital reach in a family-focused local league.', 'Coupon + clean sheet offer', 'Parents and local families', 'Pitching to Luigi\\\'s Pizzeria...')}
                ${discoverCard('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80', 'Gym interior', 'Harbor Fitness', 'Regional Chain - 4.8 mi', '89% MATCH', 'Interested in performance-led packages, youth clinic branding, and lead capture around recovery and conditioning.', 'MVP content + clinic', 'Athletes and parents', 'Pitching to Harbor Fitness...')}
            </div>
        </section>
    `;
}

function createProposalsView() {
    return `
        <section id="view-proposals" class="view-section">
            <header class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div><h1 class="text-3xl font-extrabold font-display text-slate-900">Creative Proposals</h1><p class="text-slate-500 mt-1">High-engagement activations that help sponsors buy outcomes, not just visibility.</p></div>
                <button class="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all">+ New Proposal</button>
            </header>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                ${proposalCard('https://images.unsplash.com/photo-1571406252241-db4e89d8a08b?auto=format&fit=crop&w=1000&q=80', 'People sharing pizza', 'Engagement', 'Luigi\\'s Pizzeria', 'Clean Sheet = Free Slice', 'If Westside FC records a clean sheet, fans unlock a digital pizza coupon through the match recap email and social story link.', '$500 per match in-kind + traffic lift', '4 clubs interested', 'Interest Registered', 'I\\'m Interested', 'indigo')}
                ${proposalCard('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=80', 'Fans in a stadium crowd', 'Lead Generation', 'North Harbor Accounting', 'Matchday Tax Tip + Family Giveaway', 'A sponsored newsletter block shares a practical tax tip for parents and a giveaway form that captures qualified local leads.', '$2,400 campaign + 300 email signups', '2 clubs shortlisted', 'Proposal Saved', 'Save Proposal', 'emerald')}
            </div>
        </section>
    `;
}

function createMessagesView() {
    return `
        <section id="view-messages" class="view-section">
            <div class="glass-card rounded-3xl shadow-xl flex flex-col md:flex-row h-[calc(100vh-140px)] md:h-[calc(100vh-180px)] overflow-hidden relative">
                <div id="chat-list" class="w-full md:w-80 border-r border-slate-100 flex flex-col h-full bg-white transition-transform duration-300 z-10">
                    <div class="p-6 border-b border-slate-50 bg-slate-50/50"><h2 class="font-bold text-slate-900 font-display">Inbox</h2><p class="text-sm text-slate-500 mt-1">Keep sponsor discussion in one place instead of chasing email threads.</p></div>
                    <div class="overflow-y-auto flex-1">
                        ${chatListItem('Luigi\\'s Pizzeria', 'LP', '10:42 AM', '"Sounds great. Can you share the mock-up..."', true)}
                        ${chatListItem('Harbor Fitness', 'HF', 'Yesterday', '"We can increase the clinic budget if..."')}
                    </div>
                </div>
                <div id="chat-area" class="w-full md:flex-1 flex flex-col bg-slate-50/30 h-full absolute md:relative transform translate-x-full md:translate-x-0 transition-transform duration-300 z-20">
                    <div class="p-6 border-b border-slate-100 bg-white/80 backdrop-blur-md flex justify-between items-center">
                        <div class="flex items-center">
                            <button data-action="close-chat" class="md:hidden mr-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-xl"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></button>
                            <div id="chat-icon" class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-bold mr-4">LP</div>
                            <div><h3 id="chat-title" class="font-bold text-slate-900 font-display">Luigi's Pizzeria</h3><p class="text-xs text-slate-500">Real-time negotiation and creative review</p></div>
                        </div>
                        <button data-action="navigate" data-view="dashboard" class="hidden sm:block text-xs font-bold text-slate-400 hover:text-rose-500 uppercase tracking-widest">Exit Chat</button>
                    </div>
                    <div class="flex-1 p-8 overflow-y-auto space-y-6">
                        <div class="flex justify-end"><div class="bg-slate-900 text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] shadow-lg shadow-slate-200"><p class="text-sm leading-relaxed">We mapped out the Clean Sheet Supper Series with a sleeve logo, recap mention, and coupon CTA.</p></div></div>
                        <div class="flex justify-start"><div class="bg-white text-slate-800 border border-slate-100 p-4 rounded-2xl rounded-tl-none max-w-[80%] shadow-sm"><p class="text-sm leading-relaxed">Sounds great. Can you share the mock-up and expected newsletter reach before we confirm?</p></div></div>
                        <div class="flex justify-end"><div class="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] shadow-lg shadow-indigo-100"><p class="text-sm leading-relaxed">Yes. We are projecting 2,400 local opens over the season, and the media kit includes the sponsor slot specs.</p></div></div>
                    </div>
                    <div class="p-6 bg-white border-t border-slate-100"><div class="flex space-x-3"><input type="text" placeholder="Write a message..." class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"><button data-action="toast" data-message="Sent" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-100"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></button></div></div>
                </div>
            </div>
        </section>
    `;
}

function createProfileView() {
    return `
        <section id="view-profile" class="view-section">
            <header class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div><h1 class="text-3xl font-extrabold font-display text-slate-900">Media Kit</h1><p class="text-slate-500 mt-1 italic">A digital brand passport for clubs that need to look professional fast.</p></div>
                <button class="bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all">Edit Profile</button>
            </header>
            <div class="glass-card rounded-3xl overflow-hidden shadow-sm">
                <div class="relative h-52 bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-400"><img src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1400&q=80" alt="Football training session on a field" class="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-35"><div class="absolute -bottom-10 left-10 w-24 h-24 bg-white rounded-3xl border-[6px] border-white shadow-xl flex items-center justify-center text-3xl font-bold text-indigo-600">WF</div></div>
                <div class="pt-16 p-10">
                    <div class="flex flex-col md:flex-row justify-between items-start mb-10 gap-4">
                        <div><h2 class="text-2xl font-extrabold font-display text-slate-900">Westside FC</h2><p class="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">EST. 2018 - Metro League Premier</p><p class="mt-4 text-sm text-slate-600 max-w-2xl">Westside FC is a community-driven amateur football club with competitive senior teams, youth clinics, and a strong local family audience that sponsors can activate around.</p></div>
                        <span class="mt-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-4 py-2 rounded-full border border-emerald-100 uppercase tracking-widest">Actively Pitching</span>
                    </div>
                    <div class="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8">
                        <div class="space-y-8">
                            <div><h3 class="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-4">The Story</h3><p class="text-slate-600 leading-relaxed">The club serves players, parents, and local supporters across league play, clinics, and community events. SponsorSync packages that audience into a presentation local businesses can quickly understand and buy.</p></div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                ${mediaStat('Weekly reach', '2,500+')}
                                ${mediaStat('Followers', '6.4k')}
                                ${mediaStat('Events / season', '28')}
                            </div>
                        </div>
                        <div class="space-y-6">
                            <div class="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl"><h3 class="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-6">Metrics</h3><div class="space-y-6"><div><p class="text-slate-400 text-[10px] font-bold uppercase mb-1">Family Households Reached</p><p class="text-2xl font-bold font-display">1,180</p></div><div><p class="text-slate-400 text-[10px] font-bold uppercase mb-1">Average Matchday Attendance</p><p class="text-2xl font-bold font-display">310</p></div><div><p class="text-slate-400 text-[10px] font-bold uppercase mb-1">Sponsor Renewal Goal</p><p class="text-2xl font-bold font-display">85%</p></div></div></div>
                            <div class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80" alt="Youth players on a football field" class="h-56 w-full object-cover"><div class="p-6"><p class="text-sm font-bold text-slate-900">Why the media kit matters</p><p class="mt-2 text-sm text-slate-600">It turns a volunteer-run club into something that feels investable, consistent, and easy for a sponsor to evaluate.</p></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function homeStat(label, value, description) {
    return `<div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">${label}</p><p class="mt-2 text-3xl font-display font-extrabold">${value}</p><p class="mt-1 text-sm text-slate-300">${description}</p></div>`;
}

function featureCard(view, title, description, path, tone) {
    const toneMap = { indigo: 'bg-indigo-50 text-indigo-600', emerald: 'bg-emerald-50 text-emerald-600', amber: 'bg-amber-50 text-amber-600' };
    return `<div class="glass-card rounded-[1.75rem] p-6 shadow-sm"><div class="w-12 h-12 rounded-2xl ${toneMap[tone]} flex items-center justify-center mb-5"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="${path}"></path></svg></div><h3 class="text-lg font-display font-bold text-slate-900">${title}</h3><p class="mt-3 text-sm text-slate-600 leading-relaxed">${description}</p><button data-action="navigate" data-view="${view}" class="mt-5 text-sm font-bold text-indigo-600 hover:underline">Open feature</button></div>`;
}

function dealCard(image, alt, category, price, title, description, target, assets, tone) {
    const toneClass = tone === 'rose' ? 'text-rose-500' : tone === 'emerald' ? 'text-emerald-600' : 'text-indigo-600';
    return `<article class="glass-card rounded-[2rem] overflow-hidden shadow-sm"><img src="${image}" alt="${alt}" class="h-52 w-full object-cover"><div class="p-6"><div class="flex items-center justify-between gap-4 mb-4"><span class="text-[11px] font-bold uppercase tracking-[0.18em] ${toneClass}">${category}</span><span class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">${price}</span></div><h3 class="text-xl font-display font-bold text-slate-900">${title}</h3><p class="mt-3 text-sm text-slate-600 leading-relaxed">${description}</p><div class="mt-5 grid grid-cols-2 gap-3 text-sm"><div class="rounded-2xl bg-slate-50 border border-slate-200 p-3"><p class="text-slate-400 text-[10px] font-bold uppercase tracking-[0.18em]">Target</p><p class="mt-1 font-bold text-slate-900">${target}</p></div><div class="rounded-2xl bg-slate-50 border border-slate-200 p-3"><p class="text-slate-400 text-[10px] font-bold uppercase tracking-[0.18em]">Assets</p><p class="mt-1 font-bold text-slate-900">${assets}</p></div></div></div></article>`;
}

function walkthroughRow(title, description, view) {
    return `<div class="rounded-2xl border border-slate-200 bg-white p-5"><div class="flex items-start justify-between gap-5"><div><p class="text-sm font-bold text-slate-900">${title}</p><p class="mt-2 text-sm text-slate-600 leading-relaxed">${description}</p></div><button data-action="navigate" data-view="${view}" class="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Open</button></div></div>`;
}

function metricTile(label, value, tone) {
    const toneClass = { emerald: 'bg-emerald-50 border-emerald-100 text-emerald-700', indigo: 'bg-indigo-50 border-indigo-100 text-indigo-700', amber: 'bg-amber-50 border-amber-100 text-amber-700', slate: 'bg-slate-100 border-slate-200 text-slate-500' }[tone];
    return `<div class="rounded-2xl border p-4 ${toneClass}"><p class="text-[10px] font-bold uppercase tracking-[0.16em]">${label}</p><p class="mt-2 text-2xl font-display font-extrabold text-slate-900">${value}</p></div>`;
}

function dashboardMetric(label, value, subtext, highlighted = false) {
    return `<div class="glass-card p-6 rounded-2xl shadow-sm ${highlighted ? 'border-l-4 border-l-indigo-600' : ''}"><p class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">${label}</p><p class="text-3xl font-extrabold font-display">${value}</p><span class="${highlighted ? 'text-slate-400 italic' : 'text-emerald-600 font-bold'} text-xs mt-2 inline-block">${subtext}</span></div>`;
}

function discoverCard(image, alt, name, meta, match, description, activation, audience, toastMessage) {
    return `<div class="glass-card rounded-3xl overflow-hidden hover:shadow-xl transition-all"><img src="${image}" alt="${alt}" class="h-48 w-full object-cover"><div class="p-8"><div class="flex justify-between items-start mb-6"><div><h3 class="text-xl font-bold font-display text-slate-900">${name}</h3><p class="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">${meta}</p></div><div class="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-3 py-1.5 rounded-full border border-emerald-100">${match}</div></div><p class="text-sm text-slate-600 leading-relaxed mb-6">${description}</p><div class="grid grid-cols-2 gap-3 mb-8"><div class="rounded-2xl bg-slate-50 border border-slate-200 p-4"><p class="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Ideal activation</p><p class="mt-1 text-sm font-bold text-slate-900">${activation}</p></div><div class="rounded-2xl bg-slate-50 border border-slate-200 p-4"><p class="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Audience overlap</p><p class="mt-1 text-sm font-bold text-slate-900">${audience}</p></div></div><button data-action="toast" data-message="${toastMessage}" class="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-600 transition-all text-sm shadow-lg shadow-slate-200">Send Pitch</button></div></div>`;
}

function proposalCard(image, alt, tag, sponsor, title, description, value, footer, toastMessage, cta, tone) {
    const toneClass = tone === 'emerald' ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-100 text-indigo-700';
    return `<div class="glass-card rounded-3xl overflow-hidden flex flex-col"><img src="${image}" alt="${alt}" class="h-52 w-full object-cover"><div class="p-8 flex-1"><div class="flex justify-between items-start mb-4"><span class="${toneClass} text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">${tag}</span><span class="text-[10px] font-bold text-slate-400">${sponsor}</span></div><h3 class="text-xl font-bold font-display text-slate-900 mb-4">${title}</h3><p class="text-sm text-slate-600 leading-relaxed mb-8">${description}</p><div class="bg-slate-50 p-4 rounded-2xl border border-slate-100"><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Value</p><p class="text-lg font-bold text-slate-900">${value}</p></div></div><div class="px-8 py-5 bg-white border-t border-slate-100 flex justify-between items-center"><span class="text-xs font-bold text-slate-400 italic">${footer}</span><button data-action="toast" data-message="${toastMessage}" class="text-indigo-600 font-bold text-sm hover:underline">${cta}</button></div></div>`;
}

function chatListItem(name, icon, time, preview, active = false) {
    const activeClasses = active ? 'bg-indigo-50/30 border-l-4 border-l-indigo-600' : '';
    const timestampClass = active ? 'text-indigo-600' : 'text-slate-400';
    return `<div data-action="open-chat" data-name="${name}" data-icon="${icon}" class="p-6 border-b border-slate-50 ${activeClasses} cursor-pointer hover:bg-slate-50 transition-all"><div class="flex justify-between mb-1"><h3 class="font-bold text-sm text-slate-900">${name}</h3><span class="text-[10px] font-bold ${timestampClass}">${time}</span></div><p class="text-xs text-slate-500 truncate italic">${preview}</p></div>`;
}

function mediaStat(label, value) {
    return `<div class="rounded-2xl bg-white border border-slate-200 p-5"><p class="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">${label}</p><p class="mt-2 text-2xl font-display font-extrabold text-slate-900">${value}</p></div>`;
}
