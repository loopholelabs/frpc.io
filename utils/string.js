export function CleanHyphen(text) {
    return text.replaceAll(/-\/?/g, " ")
}

export function AddHyphen(text) {
    return text.replaceAll(/ \/?/g, "-")
}