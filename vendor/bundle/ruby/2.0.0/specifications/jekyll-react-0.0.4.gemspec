# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "jekyll-react"
  s.version = "0.0.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Andrew Plaza (InsidiousMind)"]
  s.date = "2017-01-12"
  s.email = ["aplaza@liquidthink.net"]
  s.homepage = "https://github.com/InsidiousMind/Jekyll-React"
  s.licenses = ["GPL-3.0"]
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.14.1"
  s.summary = "A Jekyll Plugin that generates a JSON file of configuration variables and Pages"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>, ["< 4.0", ">= 3.3.1"])
    else
      s.add_dependency(%q<jekyll>, ["< 4.0", ">= 3.3.1"])
    end
  else
    s.add_dependency(%q<jekyll>, ["< 4.0", ">= 3.3.1"])
  end
end
