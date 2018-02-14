# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "uglifier"
  s.version = "4.1.6"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Ville Lautanala"]
  s.date = "2018-02-08"
  s.description = "Uglifier minifies JavaScript files by wrapping UglifyJS to be accessible in Ruby"
  s.email = ["lautis@gmail.com"]
  s.extra_rdoc_files = ["LICENSE.txt", "README.md", "CHANGELOG.md", "CONTRIBUTING.md"]
  s.files = ["LICENSE.txt", "README.md", "CHANGELOG.md", "CONTRIBUTING.md"]
  s.homepage = "http://github.com/lautis/uglifier"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3")
  s.rubygems_version = "2.0.14.1"
  s.summary = "Ruby wrapper for UglifyJS JavaScript compressor"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<execjs>, ["< 3", ">= 0.3.0"])
      s.add_development_dependency(%q<rspec>, ["~> 3.0"])
      s.add_development_dependency(%q<rake>, ["~> 12.0"])
      s.add_development_dependency(%q<bundler>, ["~> 1.3"])
      s.add_development_dependency(%q<sourcemap>, ["~> 0.1.1"])
    else
      s.add_dependency(%q<execjs>, ["< 3", ">= 0.3.0"])
      s.add_dependency(%q<rspec>, ["~> 3.0"])
      s.add_dependency(%q<rake>, ["~> 12.0"])
      s.add_dependency(%q<bundler>, ["~> 1.3"])
      s.add_dependency(%q<sourcemap>, ["~> 0.1.1"])
    end
  else
    s.add_dependency(%q<execjs>, ["< 3", ">= 0.3.0"])
    s.add_dependency(%q<rspec>, ["~> 3.0"])
    s.add_dependency(%q<rake>, ["~> 12.0"])
    s.add_dependency(%q<bundler>, ["~> 1.3"])
    s.add_dependency(%q<sourcemap>, ["~> 0.1.1"])
  end
end
