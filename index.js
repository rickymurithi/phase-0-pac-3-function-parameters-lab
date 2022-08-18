function introduction(name = 'Aki'){
    return `Hi, my name is ${name}.`;
}
introduction('Aki')

function introductionWithLanguage(name = 'Samip', language = 'React'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage('Samip', 'React')

function introductionWithLanguageOptional(name, language ="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
