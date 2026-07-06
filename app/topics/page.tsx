export default async function TopicsPage() {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Index of Topics</h1>
            <div className="p-4 grid grid-cols-2 gap-4 text-center">      
                <section>
                    <h2 className="text-xl font-bold">Front-End</h2>
                    <ul className="text-blue-500">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                        <li><a href="#">TypeScript</a></li>
                        <li><a href="#">React.js</a></li>
                        <li><a href="#">Angular</a></li>
                        <li><a href="#">Bootstrap</a></li>
                        <li><a href="#">Tailwind</a></li>
                    </ul>
                </section>
                <section>
                <h2 className="text-xl font-bold">Back-End</h2>
                    <ul className="text-blue-500">
                        <li><a href="#">Node.js</a></li>
                        <li><a href="#">Express.js</a></li>
                        <li><a href="#">Flask</a></li>
                        <li><a href="#">Django</a></li>
                        <li><a href="#">FastAPI</a></li>
                        <li><a href="#">Ruby on Rails</a></li>
                        <li><a href="#">PHP Laravel</a></li>
                        <li><a href="#">Java Spring</a></li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-bold">Databases</h2>
                    <ul className="text-blue-500">
                        <li><a href="#">MySQL</a></li>
                        <li><a href="#">PostgreSQL</a></li>
                        <li><a href="#">SQL Server</a></li>
                        <li><a href="#">SQLite</a></li>
                        <li><a href="#">MongoDB</a></li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-bold">Data Science</h2>
                    <ul className="text-blue-500">
                        <li><a href="#">Python</a></li>
                        <li><a href="#">NumPy</a></li>
                        <li><a href="#">Pandas</a></li>
                        <li><a href="#">Matplotlib</a></li>
                        <li><a href="#">Scikit-learn</a></li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-bold">AI & Machine Learning</h2>
                    <ul className="text-blue-500">
                        <li><a href="#">TensorFlow</a></li>
                        <li><a href="#">Keras</a></li>
                        <li><a href="#">PyTorch</a></li>
                        <li><a href="#">LangChain</a></li>
                        <li><a href="#">LlamaIndex</a></li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-bold">Cloud & Containers</h2>
                    <ul className="text-blue-500">
                        <li><a href="#">AWS</a></li>
                        <li><a href="#">Azure</a></li>
                        <li><a href="#">GCP</a></li>
                        <li><a href="#">Docker</a></li>
                        <li><a href="#">Kubernetes</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
