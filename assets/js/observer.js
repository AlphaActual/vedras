export default function setupObserver() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            };                   
        })
    })

    const elementsToObserve = document.querySelectorAll('fade-from-bottom');
    elementsToObserve.forEach(el => observer.observe(el));

}
