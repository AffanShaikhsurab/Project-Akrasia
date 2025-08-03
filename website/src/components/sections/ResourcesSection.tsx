import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, BookOpen } from 'lucide-react';
import { bookData, referencesData } from '@/lib/data';

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Resources & References
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deeper into the science of behavior change with these 
            recommended books and research papers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recommended Books */}
          <div>
            <div className="flex items-center mb-8">
              <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Recommended Books
              </h3>
            </div>
            
            <div className="space-y-6">
              {bookData.map((book, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-gray-900">
                          {book.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-1">
                          by {book.author}
                        </p>
                      </div>
                      <Badge variant="secondary">
                        Book
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {book.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research References */}
          <div>
            <div className="flex items-center mb-8">
              <ExternalLink className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Research References
              </h3>
            </div>
            
            <div className="space-y-4">
              {referencesData.map((reference, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 group"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                      <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors leading-relaxed">
                        {reference.text}
                      </span>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Additional Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Academic Courses
              </h4>
              <p className="text-gray-600 text-sm">
                Look for courses on behavioral economics, cognitive psychology, 
                or behavior change at universities like Stanford, Yale, and MIT.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Research Labs
              </h4>
              <p className="text-gray-600 text-sm">
                Follow the work of researchers like Peter Gollwitzer (NYU), 
                Katy Milkman (Wharton), and Angela Duckworth (UPenn).
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Apps & Tools
              </h4>
              <p className="text-gray-600 text-sm">
                Try evidence-based apps like StickK (commitment contracts), 
                Habitica (gamification), or Forest (focus enhancement).
              </p>
            </div>
          </div>
        </div>

        {/* Citation Note */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-yellow-900 mb-2">
              📝 Citation & Academic Use
            </h4>
            <p className="text-yellow-800 text-sm">
              This resource is designed for educational purposes. If you're using 
              this information for academic work, please cite the original research 
              papers and books referenced above. For the latest research updates, 
              check PubMed, Google Scholar, and the journals mentioned in our references.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}