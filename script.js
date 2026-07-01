const liffId = "20105673847VDFmpAY";

async function main() {
    await liff.init({ liffId });

    if (!liff.isLoggedIn()) {
        liff.login();
        return;
    }

    const profile = await liff.getProfile();

    document.getElementById("profile").innerHTML =
        profile.displayName;
}

main();
