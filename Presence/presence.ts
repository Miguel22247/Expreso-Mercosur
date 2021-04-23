const presence = new Presence({
	clientId: "825518757769248800"
});

var browsingStamp = Math.floor(Date.now() / 1000);


presence.on("UpdateData",() => {
	const presenceData: PresenceData = {
		largeImageKey: "logo",
		startTimestamp: browsingStamp
	},
	pathname = document.location.pathname,
	hostname = document.location.hostname;
	if (hostname === "expresomercosur.ga" || hostname === "www.expresomercosur.ga")
	// Expreso Mercosur

		if(pathname.startsWith("/inicio")) {
			presenceData.details = "Viendo";
			presenceData.state = "inicio"
		}

	if (presenceData.details == null) {
		presence.setTrayTitle();
		presence.setActivity();
	} else {
		presence.setActivity(presenceData);
	}
});